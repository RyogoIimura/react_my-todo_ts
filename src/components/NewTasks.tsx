import { memo, VFC } from "react";
import { Box, Button, Heading, ListItem, UnorderedList } from "@chakra-ui/react";

import { Todo } from '../types/todo';


type Props = {
  newTasks: Array<Todo>;
  onClickEdit: any;
  onClickDelete: any;
}

export const NewTasks: VFC<Props> = memo((props) => {

  // 分割代入
  const { newTasks, onClickEdit, onClickDelete } = props;

  return (
    <Box id='new_task' w={{ base: '350px', md: '600px' }} px={8} py={5} mx="auto" mt={10} backgroundColor='white' rounded={10} >
      <Heading as='h2' size='lg' noOfLines={1} mt={5}>
        New task
      </Heading>
      <Box
        display='flex'
        justifyContent='flex-end'
      >
        <Button
          id='sort'
        >
          Sort
        </Button>
      </Box>

      <Box >
        <UnorderedList styleType="''" ml={0}>
          {
            newTasks.map((task, index) => (
              <ListItem key={index} border='1px' px={8} py={5} mt={5} rounded={10}>
                <Heading as='h3' size='md' noOfLines={1} mt={5}>
                  タイトル : {task.title}
                </Heading>
                <Heading as='h3' size='md' noOfLines={1} mt={5}>
                  作成日 : {`${task.date.getFullYear()}/${task.date.getMonth()+1}/${task.date.getDate()}`}
                </Heading>
                <Heading as='h3' size='md' noOfLines={1} mt={5}>
                  期日 : {`${task.term.getFullYear()}/${task.term.getMonth()+1}/${task.term.getDate()}`}
                </Heading>
                <Heading as='h3' size='md' noOfLines={1} mt={5}>
                  ステータス : {task.status}
                </Heading>
                <Heading as='h3' size='md' noOfLines={1} mt={5}>
                  内容 : {task.cont}
                </Heading>

                <Box
                  display='flex'
                  justifyContent='center'
                  mt={10}
                >
                  <Button
                    onClick={() => onClickEdit(index)}
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
  );
});
