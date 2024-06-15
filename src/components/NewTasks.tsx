import { memo, useCallback, useState, VFC } from "react";
import {
  Box, Button, Heading, ListItem, Select, UnorderedList,
  Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure, ModalFooter,
} from "@chakra-ui/react";

import { Todo } from '../types/todo';
import { EditTodo } from "./EditTodo";


type Props = {
  sort: string;
  newTasks: Array<Todo>;
  sortArray: Array<string>;
  onChangeSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onClickDelete: (index: number) => void;

  statusArray: Array<string>;
  setNewTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
  dueDate: (date: Date) => string;
}

export const NewTasks: VFC<Props> = memo((props) => {

  // 分割代入
  const {
    sort, newTasks, sortArray, onChangeSort, onClickDelete,
    statusArray, setNewTasks, dueDate
  } = props;

  const createdDate = (date: Date) => `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const onClickEditOpen = useCallback(() => onOpen(), []);

  type Edit =  Todo & {index: number};
  const [edit, setEdit] = useState<Edit>({
    title: '',
    date: new Date(),
    term: new Date(),
    status: 'Waiting',
    cont: '',
    index: 0
  });

  const onClickEdit = (index: number) => {
    setEdit({
      title: newTasks[index].title,
      date: newTasks[index].date,
      term: newTasks[index].term,
      status: newTasks[index].status,
      cont: newTasks[index].cont,
      index
    });
  }
  const onChangeEditTitle = (e: React.ChangeEvent<HTMLInputElement>) => setEdit((state) => ({ ...state, title: e.target.value}));
  const onChangeEditTerm = (e: React.ChangeEvent<HTMLInputElement>) => setEdit((state) => ({ ...state, term: new Date(e.target.value)}));
  const onChangeEditCont = (e: React.ChangeEvent<HTMLTextAreaElement>) => setEdit((state) => ({ ...state, cont: e.target.value}));
  const onChangeEditStatus = (e: any) => setEdit((state) => ({ ...state, status: e.target.value}));
  const onClickEditKeep = () => {
    const task = [...newTasks];
    task[edit.index] = {
      title: edit.title,
      date: new Date(),
      term: edit.term,
      status: edit.status,
      cont: edit.cont
    };
    setNewTasks(task);
    setEdit({
      title: '',
      date: new Date(),
      term: new Date(),
      status: 'Waiting',
      cont: '',
      index: 0
    });
  };
  const beSaved = () => {
    if( edit.title != '' ){
      return (
        newTasks[edit.index].title == edit.title &&
        newTasks[edit.index].term.getFullYear() == edit.term.getFullYear() &&
        newTasks[edit.index].term.getMonth() == edit.term.getMonth() &&
        newTasks[edit.index].term.getDate() == edit.term.getDate() &&
        newTasks[edit.index].status==edit.status &&
        newTasks[edit.index].cont==edit.cont
      )
    }
  }


  return (
    <>
      <Box id='new_task' w={{ base: '350px', md: '600px' }} px={8} py={5} mx="auto" mt={10} backgroundColor='white' rounded={10} >
        <Heading as='h2' size='lg' noOfLines={1} mt={5}>
          New task
        </Heading>
        <Box
          display='flex'
          justifyContent='flex-end'
        >
          <Select
            id='sort'
            w='fit-content'
            value={sort}
            onChange={onChangeSort}
            isDisabled={newTasks.length<=1}
          >
            {
              sortArray.map((sort, index) => (
                <option key={index}>{sort}</option>
              ))
            }
          </Select>
        </Box>

        <Box >
          <UnorderedList styleType="''" ml={0}>
            {
              newTasks.map((task, index) => (
                <ListItem key={index} className={task.status} border='1px' px={8} py={5} mt={5} rounded={10}>
                  <Heading as='h3' size='md' noOfLines={1} mt={5}>
                    <Box as='span' whiteSpace="nowrap">タイトル</Box>&nbsp;:&nbsp;{task.title}
                  </Heading>
                  <Heading as='h3' size='md' noOfLines={1} mt={5}>
                    作成日&nbsp;:&nbsp;{createdDate(task.date)}
                  </Heading>
                  <Heading as='h3' size='md' noOfLines={1} mt={5}>
                    期日&nbsp;:&nbsp;{createdDate(task.term)}
                  </Heading>
                  <Heading as='h3' size='md' noOfLines={1} mt={5}>
                    ステータス&nbsp;:&nbsp;{task.status}
                  </Heading>
                  <Heading as='h3' size='md' overflow="hidden" mt={5}>
                    <Box as='span' whiteSpace="nowrap">内容</Box>&nbsp;:&nbsp;{task.cont}
                  </Heading>

                  <Box
                    display='flex'
                    justifyContent='center'
                    mt={10}
                  >
                    <Button
                      onClick={() => {
                        onClickEdit(index);
                        onClickEditOpen();
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      ml={5}
                      onClick={() => onClickDelete(index)}
                    >
                      Discontinued
                    </Button>
                  </Box>
                </ListItem>
              ))
            }
          </UnorderedList>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'sm', md: 'xl'}}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody px={8} py={5} backgroundColor='white' rounded={10} >
            <EditTodo
              edit={edit}
              statusArray={statusArray}
              onChangeEditTitle={onChangeEditTitle}
              onChangeEditTerm={onChangeEditTerm}
              onChangeEditStatus={onChangeEditStatus}
              onChangeEditCont={onChangeEditCont}
              dueDate={dueDate}
            />
          </ModalBody>
          <ModalFooter>
            <Box display='flex' justifyContent='center'>
              <Button
                mx='auto'
                mt={5}
                onClick={() => {
                  onClickEditKeep();
                  onClose();
                }}
                isDisabled={beSaved()}
              >
                Keep
              </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});
