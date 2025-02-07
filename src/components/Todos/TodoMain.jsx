import React, { useState } from 'react';

import styles from './scss/TodoMain.module.scss';
import TodoItem from './TodoItem';


// 컴포넌트
const TodoMain = ({items}) => {
  
  return (
    <ul className={styles['todo-list']}>
      {items.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </ul>
  );
};

export default TodoMain;