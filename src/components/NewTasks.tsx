import { memo, VFC } from "react";
import {
  Box, Button, Heading, ListItem, Select, UnorderedList,
  Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure, ModalFooter,
} from "@chakra-ui/react";

import { Todo } from '../types/todo';
import { EditTodo } from "./EditTodo";


type Props = {
  // NewTasks
  sort: string;
  newTasks: Array<Todo>;
  sortArray: Array<string>;
  onChangeSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onClickEdit: (index: number) => void;
  onClickDelete: (index: number) => void;

  // EditTodo
  edit: Todo;
  statusArray: Array<string>;
  onChangeEditTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEditTerm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEditStatus: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeEditCont: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClickEditKeep: () => void;
}

export const NewTasks: VFC<Props> = memo((props) => {

  // 分割代入
  const {
    // NewTasks
    sort, newTasks, sortArray, onChangeSort, onClickEdit, onClickDelete,
    // EditTodo
    edit, statusArray, onChangeEditTitle, onChangeEditTerm, onChangeEditStatus, onChangeEditCont, onClickEditKeep
  } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

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
                <ListItem key={index} border='1px' px={8} py={5} mt={5} rounded={10}>
                  <Heading as='h3' size='md' noOfLines={1} mt={5}>
                    <Box as='span' whiteSpace="nowrap">タイトル</Box>&nbsp;:&nbsp;{task.title}
                  </Heading>
                  <Heading as='h3' size='md' noOfLines={1} mt={5}>
                    作成日&nbsp;:&nbsp;{`${task.date.getFullYear()}/${task.date.getMonth()+1}/${task.date.getDate()}`}
                  </Heading>
                  <Heading as='h3' size='md' noOfLines={1} mt={5}>
                    期日&nbsp;:&nbsp;{`${task.term.getFullYear()}/${task.term.getMonth()+1}/${task.term.getDate()}`}
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
                        onOpen();
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
