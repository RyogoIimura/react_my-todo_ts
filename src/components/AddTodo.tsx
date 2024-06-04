import { memo, VFC } from "react";
import { Box, Button, Heading, Input, Select, Textarea } from "@chakra-ui/react";

import { Todo } from '../types/todo';


type Props = {
  todo: Todo;
  statusArray: Array<string>;

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
  const { todo, statusArray, onChangeTitle, onChangeTerm, onChangeCont, onChangeStatus, onClickAdd, } = props;

  return (
    <Box w={{ base: '350px', md: '600px' }} px={8} py={5} mx="auto" backgroundColor='white' rounded={10} >
      <Heading as='h1' size='xl' noOfLines={1}>
        My todo APP
      </Heading>

      <Box>
        <Heading as='h2' size='lg' noOfLines={1} mt={5}>
          タイトル
        </Heading>
        <Input
          value={todo.title}
          onChange={onChangeTitle}
        />
      </Box>
      <Box>
        <Heading as='h2' size='lg' noOfLines={1} mt={5}>
          期日
        </Heading>
        <Input
          type="date"
          value={`${todo.term.getFullYear()}-${("0" + (todo.term.getMonth() + 1)).slice(-2)}-${("0" + todo.term.getDate()).slice(-2)}`}
          onChange={onChangeTerm}
        />
      </Box>
      <Box>
        <Heading as='h2' size='lg' noOfLines={1} mt={5}>
          ステータス
        </Heading>
        <Select
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
          value={todo.cont}
          onChange={onChangeCont}
          height={150}
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
