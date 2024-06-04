import React, { useState } from 'react';
import { Box, Button, ChakraProvider, Heading, ListItem, Select, UnorderedList } from "@chakra-ui/react";
import './App.css';

import { theme } from "./theme/theme";
import { AddTodo } from './components/AddTodo';
import { EditTodo } from './components/EditTodo';
import { NewTasks } from './components/NewTasks';

import { Todo } from './types/todo';


function App() {

  // Common
  const [newTasks, setNewTasks] = useState<Array<Todo>>([]);

  const statusArray: Array<string> = [
    'Waiting',
    'Working',
    'Completed'
  ];


  // AddTodo
  const [todo, setTodo] = useState<Todo>({
    title: '',
    date: new Date(),
    term: new Date(),
    status: '',
    cont: ''
  });

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTodo((state) => ({ ...state, title: e.target.value}));
  const onChangeTerm = (e: React.ChangeEvent<HTMLInputElement>) => setTodo((state) => ({ ...state, term: new Date(e.target.value)}));
  const onChangeCont = (e: React.ChangeEvent<HTMLTextAreaElement>) => setTodo((state) => ({ ...state, cont: e.target.value}));
  const onChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => setTodo((state) => ({ ...state, status: e.target.value}));
  const onClickAdd = () => {
    const task = [...newTasks];
    task.push({
      title: todo.title,
      date: new Date(),
      term: todo.term,
      status: todo.status,
      cont: todo.cont
    });
    setNewTasks(task);
    // console.log(task);

    setTodo({
      title: '',
      date: new Date(),
      term: new Date(),
      status: '',
      cont: ''
    });
  };


  // NewTasks
  const onClickDelete = (index: number) => {
    const task = [...newTasks];
    task.splice(index,1)
    setNewTasks(task);
  };

  const [sort, setSort] = useState<string>('');
  const sortArray: Array<string> = [
    'Sort',
    'Ascending',
    'Descending'
  ];

  const onChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const task = [...newTasks];
    // Ascending の場合(昇順)
    if( e.target.value === 'Ascending' ){
      task.sort((a,b) => (a.term < b.term ? -1 : 1))
    }
    // Descending の場合(降順)
    if( e.target.value === 'Descending' ){
      task.sort((a,b) => (a.term > b.term ? -1 : 1))
    }
    // Sort の場合(作成日順)
    if( e.target.value === 'Sort' ){
      task.sort((a,b) => (a.date < b.date ? -1 : 1))
    }
    setNewTasks(task);
    setSort(e.target.value)
  }


  // EditTodo
  type Edit =  Todo & {index: number};
  const [edit, setEdit] = useState<Edit>({
    title: '',
    date: new Date(),
    term: new Date(),
    status: '',
    cont: '',
    index: 0
  });

  const onClickEdit = (index: number) => {
    document.body.classList.add('visible');
    setEdit({
      title: newTasks[index].title,
      date: newTasks[index].date,
      term: newTasks[index].term,
      status: newTasks[index].status,
      cont: newTasks[index].cont,
      index
    });
  }
  const onChangeEditTitle = (e: React.ChangeEvent<HTMLInputElement>) => setEdit((state) => ({ ...state, title: e.target.value}));
  const onChangeEditTerm = (e: React.ChangeEvent<HTMLInputElement>) => setEdit((state) => ({ ...state, term: new Date(e.target.value)}));
  const onChangeEditCont = (e: React.ChangeEvent<HTMLTextAreaElement>) => setEdit((state) => ({ ...state, cont: e.target.value}));
  const onChangeEditStatus = (e: React.ChangeEvent<HTMLSelectElement>) => setEdit((state) => ({ ...state, status: e.target.value}));
  const onClickEditKeep = () => {
    const task = [...newTasks];
    task[edit.index] = {
      title: edit.title,
      date: new Date(),
      term: edit.term,
      status: edit.status,
      cont: edit.cont
    };
    setNewTasks(task);
    document.body.classList.remove('visible');
  };


  return (
    <ChakraProvider theme={theme}>

      <AddTodo
        todo={todo}
        statusArray={statusArray}
        onChangeTitle={onChangeTitle}
        onChangeTerm={onChangeTerm}
        onChangeCont={onChangeCont}
        onChangeStatus={onChangeStatus}
        onClickAdd={onClickAdd}
      />

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

      {/* <NewTasks
        newTasks={newTasks}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      /> */}

      <EditTodo
        edit={edit}
        statusArray={statusArray}
        onChangeEditTitle={onChangeEditTitle}
        onChangeEditTerm={onChangeEditTerm}
        onChangeEditStatus={onChangeEditStatus}
        onChangeEditCont={onChangeEditCont}
        onClickEditKeep={onClickEditKeep}
      />
    </ChakraProvider>
  );
}

export default App;
