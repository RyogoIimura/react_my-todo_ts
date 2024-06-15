import { memo, VFC } from "react";
import { Box, Heading, Input, Select, Textarea } from "@chakra-ui/react";

import { Todo } from '../types/todo';


type Props = {
  edit: Todo;
  statusArray: Array<string>;
  onChangeEditTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEditTerm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEditStatus: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeEditCont: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  dueDate: (date: Date) => string;
}

export const EditTodo: VFC<Props> = memo((props) => {

  // 分割代入
  const { edit, statusArray, onChangeEditTitle, onChangeEditTerm, onChangeEditStatus, onChangeEditCont, dueDate } = props;

  return (
    <Box>
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
          value={dueDate(edit.term)}
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
    </Box>
  );
});
