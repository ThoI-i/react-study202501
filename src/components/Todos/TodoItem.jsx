
import React from 'react';
import { MdDelete, MdDone } from 'react-icons/md';

import styles from './scss/TodoItem.module.scss';

const TodoItem = ({ item, onDelete }) => {
  const {
    text,
    remove,
    'todo-list-item': itemStyle,
    'check-circle': checkCircle,
  } = styles;

  const { id, title, done } = item;

  // 삭제 처리 이벤트
  const handleDelete = (e) => {
    // console.log('delete!! id: ', id);
    onDelete(id);
  };

  return (
    <li className={itemStyle}>
      <div className={checkCircle}>{done && <MdDone />}</div>
      <span className={text}>{title}</span>
      <div
        className={remove}
        onClick={handleDelete}>
        <MdDelete />
      </div>
    </li>
  );
};

export default TodoItem;
