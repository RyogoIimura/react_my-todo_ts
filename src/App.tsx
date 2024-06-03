import React from 'react';
import { Box, Button, ChakraProvider, Heading } from "@chakra-ui/react";
import './App.css';

import { theme } from "./theme/theme";
import { AddTodo } from './components/AddTodo';
import { EditTodo } from './components/EditTodo';
import { NewTasks } from './components/NewTasks';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AddTodo />

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
