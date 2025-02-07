import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';

import styles from './scss/TodoInput.module.scss';

const TodoInput = () => {
  const {
    'form-wrapper': wrapper,
    'insert-form': insertForm,
    'insert-btn': insertBtn,
  } = styles;

  // 입력창을 열어줄지 여부를 관리
  const [open, setOpen] = useState(false);

  return (
    <>
      { 
        open &&
        <div className={wrapper}>
          <form className={insertForm}>
            <input
              type='text'
              placeholder='할 일을 입력 후, 엔터를 누르세요!'
            />
          </form>
        </div>
      }
      <button className={insertBtn} onClick={() => setOpen(!open)}>
        <MdAdd />
      </button>
    </>
  );
};

export default TodoInput;
