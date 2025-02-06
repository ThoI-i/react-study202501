import React from 'react';
import TodoHeader from './TodoHeader';
import styles from './scss/TodoTemplate.module.scss';
import TodoMain from './TodoMain';
import TodoInput from './todoInput';

const TodoTemplate = () => {
  return (
    <div className={styles.TodoTemplate}>
      <TodoHeader />
      <TodoMain />
      <TodoInput />
    </div>
  );
};
export default TodoTemplate;