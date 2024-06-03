import React, { useState } from 'react';
import { Box, Button, ChakraProvider, Heading, Input, Select } from "@chakra-ui/react";
import './App.css';

import { theme } from "./theme/theme";
import { AddTodo } from './components/AddTodo';
import { EditTodo } from './components/EditTodo';
import { NewTasks } from './components/NewTasks';

import { Todo } from './types/todo';

function App() {

  // useState
  const [todo, setTodo] = useState<Todo>({
      title: '',
      date: 0,
      term: '',
      status: '',
      cont: ''
    });

  // function
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((state) => ({ ...state, title: e.target.value}));
    console.log(todo)
  };

  return (
    <ChakraProvider theme={theme}>

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
          />
        </Box>
        <Box>
          <Heading as='h2' size='lg' noOfLines={1} mt={5}>
            ステータス
          </Heading>
          <Select id='status' placeholder='Select option' value={todo.status}>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </Box>
        <Box>
          <Heading as='h2' size='lg' noOfLines={1} mt={5}>
            内容
          </Heading>
          <Input
            id='cont'
            value={todo.cont}
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
          >
            Add todo
          </Button>
        </Box>
      </Box>







      <EditTodo />

      <Box id='new_task' w={{ base: '300px', md: '500px'}} px={8} py={5} mx="auto" mt={10} backgroundColor='white' rounded={10} >
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

        {/* タスク一覧 */}
        <NewTasks />
      </Box>
    </ChakraProvider>
  );
}

export default App;
