import React from 'react';
import { MdDelete, MdDone } from 'react-icons/md';

import styles from './scss/TodoItem.module.scss';

const TodoItem = ({item}) => {

  const { text, remove, 'todo-list-item': itemStyle, 'check-circle': checkCircle } = styles;

  const { id, title, done } = item;

  return (
    <li className={itemStyle}>
      <div className={checkCircle}>
        <MdDone />
      </div>
      <span className={text}>{ title }</span>
      <div className={remove}>
        <MdDelete />
      </div>
    </li>
  );
};

export default TodoItem;