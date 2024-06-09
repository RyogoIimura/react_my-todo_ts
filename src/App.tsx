import React, { useState } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import './App.css';

import { theme } from "./theme/theme";
import { AddTodo } from './components/AddTodo';
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
    status: 'Waiting',
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
      status: 'Waiting',
      cont: ''
    });
  };


  // NewTasks
  const onClickDelete = (index: number) => {
    const task = [...newTasks];
    task.splice(index,1)
    setNewTasks(task);
  };

  const [sort, setSort] = useState<string>('Sort');
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

      <NewTasks
        sort={sort}
        newTasks={newTasks}
        sortArray={sortArray}
        onChangeSort={onChangeSort}
        onClickDelete={onClickDelete}

        // EditTodo
        statusArray={statusArray}
        setNewTasks={setNewTasks}
      />
    </ChakraProvider>
  );
}

export default App;
