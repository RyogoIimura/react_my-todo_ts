import { memo, VFC } from "react";
import { Box, Button, Heading, Input, Select, Textarea } from "@chakra-ui/react";

import { Todo } from '../types/todo';


const statusArray: Array<string> = [
  'Waiting',
  'Working',
  'Completed'
];

type Props = {
  todo: Todo;

  // 質問ここから
  onChangeTitle: any;
  onChangeTerm: any;
  onChangeCont: any;
  onChangeStatus: any;
  // 質問ここまで

  onClickAdd: () => void;
}

export const AddTodo: VFC<Props> = memo((props) => {

  // 分割代入
  const { todo, onChangeTitle, onChangeTerm, onChangeCont, onChangeStatus, onClickAdd, } = props;

  return (
    <Box w={{ base: '300px', md: '500px'}} px={8} py={5} mx="auto" mt={10} backgroundColor='white' rounded={10} >
      <Heading as='h1' size='xl' noOfLines={1}>
        My todo APP
      </Heading>

      <Box>
        <Heading as='h2' size='lg' noOfLines={1} mt={5}>
          タイトル
        </Heading>
        <Input
          id='title'
          value={todo.title}
          onChange={onChangeTitle}
        />
      </Box>
      <Box>
        <Heading as='h2' size='lg' noOfLines={1} mt={5}>
          期日
        </Heading>
        <Input
          id='term'
          value={todo.term}
          onChange={onChangeTerm}
        />
      </Box>
      <Box>
        <Heading as='h2' size='lg' noOfLines={1} mt={5}>
          ステータス
        </Heading>
        <Select
          id='status'
          value={todo.status}
          onChange={onChangeStatus}
        >
          {
            statusArray.map((status, index) => (
              <option key={index}>{status}</option>
            ))
          }
        </Select>
      </Box>
      <Box>
        <Heading as='h2' size='lg' noOfLines={1} mt={5}>
          内容
        </Heading>
        <Textarea
          id='cont'
          value={todo.cont}
          onChange={onChangeCont}
          height={200}
        />
      </Box>

      <Box
        display='flex'
        justifyContent='center'
      >
        <Button
          mx='auto'
          mt={5}
          onClick={onClickAdd}
        >
          Add todo
        </Button>
      </Box>
    </Box>
  );
});
