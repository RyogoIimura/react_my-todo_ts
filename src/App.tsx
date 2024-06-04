import React, { useState } from 'react';
import { Box, Button, ChakraProvider, Heading } from "@chakra-ui/react";
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
      date: new Date(),
      term: '',
      status: '',
      cont: ''
    });
  const [newTasks, setnewTasks] = useState<Array<Todo>>([]);

  // function AddTodo
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTodo((state) => ({ ...state, title: e.target.value}));
  const onChangeTerm = (e: React.ChangeEvent<HTMLInputElement>) => setTodo((state) => ({ ...state, term: e.target.value}));
  const onChangeCont = (e: React.ChangeEvent<HTMLInputElement>) => setTodo((state) => ({ ...state, cont: e.target.value}));
  const onChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => setTodo((state) => ({ ...state, status: e.target.value}));
  const onClickAdd = () => {
    const newDate = new Date();
    const year = newDate.getFullYear(); // 年
    const month = newDate.getMonth(); // 月
    const date = newDate.getDate(); // 日
    const todoDate = new Date(year, month, date);

    const task = [...newTasks];
    task.push({
      title: todo.title,
      date: todoDate,
      term: todo.term,
      status: todo.status,
      cont: todo.cont
    });
    setnewTasks(task);
    // console.log(task);

    setTodo({
      title: '',
      date: new Date(),
      term: '',
      status: '',
      cont: ''
    });
  };

  // function NewTasks

  // function EditTodo

  return (
    <ChakraProvider theme={theme}>

      <AddTodo
        todo={todo}
        onChangeTitle={onChangeTitle}
        onChangeTerm={onChangeTerm}
        onChangeCont={onChangeCont}
        onChangeStatus={onChangeStatus}
        onClickAdd={onClickAdd}
      />






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

      {/* <EditTodo /> */}
    </ChakraProvider>
  );
}

export default App;
