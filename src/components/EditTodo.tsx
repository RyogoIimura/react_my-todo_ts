import { Box, Button, Heading, Input, Select } from "@chakra-ui/react";

export const EditTodo = () => {

  // 分割代入
  // const {
  // } = props;

  return (
    <Box id='edit_todo' w={{ base: '300px', md: '500px'}} px={8} py={5} mx="auto" mt={10} backgroundColor='white' rounded={10} >
      <Box>
        <Heading as='h2' size='lg' noOfLines={1} mt={5}>
          タイトル
        </Heading>
        <Input id='title' />
      </Box>
      <Box>
        <Heading as='h2' size='lg' noOfLines={1} mt={5}>
          期日
        </Heading>
        <Input id='term' />
      </Box>
      <Box>
        <Heading as='h2' size='lg' noOfLines={1} mt={5}>
          ステータス
        </Heading>
        <Select id='status' placeholder='Select option'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
      </Box>
      <Box>
        <Heading as='h2' size='lg' noOfLines={1} mt={5}>
          内容
        </Heading>
        <Input id='cont' height={200} />
      </Box>
      <Box
        display='flex'
        justifyContent='center'
      >
        <Button
          mx='auto'
          mt={5}
        >
          Keep
        </Button>
      </Box>
    </Box>
  );
}
