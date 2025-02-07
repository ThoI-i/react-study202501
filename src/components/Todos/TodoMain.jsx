import React, { useState } from 'react';

import styles from './scss/TodoMain.module.scss';
import TodoItem from './TodoItem';

const DUMMY_TODOS = [
  { id: 1, title: '리액트 공부', done: true },
  { id: 2, title: '점심 먹기', done: false },
  { id: 3, title: '프로젝트하기', done: false },
  { id: 4, title: '숙제하기', done: true },
];
// 컴포넌트
const TodoMain = () => {
  
  return (
    <ul className={styles['todo-list']}>
      {DUMMY_TODOS.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </ul>
  );
};

export default TodoMain;