import React, { useState } from 'react';

import styles from './scss/TodoMain.module.scss';
import TodoItem from './TodoItem';


const DUMMY_TODOS = [
  { id: 1, title: '리액트 공부', done: true },
  { id: 2, title: '점심 먹기', done: false },
  { id: 3, title: '프로젝트하기', done: false },
  { id: 4, title: '숙제하기', done: false },
];

// 컴포넌트
const TodoMain = () => {
  
  return (
    <ul className={styles['todo-list']}>
      <TodoItem item={DUMMY_TODOS[0]} />
      <TodoItem item={DUMMY_TODOS[1]} />
      <TodoItem item={DUMMY_TODOS[2]} />
      <TodoItem item={DUMMY_TODOS[3]} />
    </ul>
  );
};

export default TodoMain;
