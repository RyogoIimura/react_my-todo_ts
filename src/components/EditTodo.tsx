import { memo, VFC } from "react";
import { Box, Button, Flex, Heading, Input, Select, Textarea } from "@chakra-ui/react";

import { Todo } from '../types/todo';


type Props = {
  edit: Todo;
  statusArray: Array<string>;
  onChangeEditTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEditTerm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEditStatus: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeEditCont: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClickEditKeep: () => void;
}

export const EditTodo: VFC<Props> = memo((props) => {

  // 分割代入
  const { edit, statusArray, onChangeEditTitle, onChangeEditTerm, onChangeEditStatus, onChangeEditCont, onClickEditKeep } = props;

  return (
    <Flex
      id='edit_todo'
      w="100vw"
      h="100vh"
      flexFlow="column"
      justify="center"
      backgroundColor='rgba(0,0,0,.3)'
      position="fixed"
      top={0}
      left={0}
    >
      <Box w={{ base: '350px', md: '600px' }} px={8} py={5} mx="auto" m="auto"  backgroundColor='white' rounded={10} >

        <Box>
          <Heading as='h2' size='lg' noOfLines={1} mt={5}>
            タイトル
          </Heading>
          <Input
            value={edit.title}
            onChange={onChangeEditTitle}
          />
        </Box>
        <Box>
          <Heading as='h2' size='lg' noOfLines={1} mt={5}>
            期日
          </Heading>
          <Input
            type="date"
            value={`${edit.term.getFullYear()}-${("0" + (edit.term.getMonth() + 1)).slice(-2)}-${("0" + edit.term.getDate()).slice(-2)}`}
            onChange={onChangeEditTerm}
          />
        </Box>
        <Box>
          <Heading as='h2' size='lg' noOfLines={1} mt={5}>
            ステータス
          </Heading>
          <Select
            value={edit.status}
            onChange={onChangeEditStatus}
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
            value={edit.cont}
            onChange={onChangeEditCont}
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
            onClick={onClickEditKeep}
          >
            Keep
          </Button>
        </Box>
      </Box>
    </Flex>
  );
});
