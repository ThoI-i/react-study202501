import React, { useState } from 'react';

import Card from '../ui/Card';
import styles from './Login.module.css';
import Button from '../ui/Button';

const Login = () => {
  // 사용자가 입력한 이메일을 상태관리
  const [enteredEmail, setEnteredEmail] = useState('');

  // 사용자가 입력한 패스워드 상태관리
  const [enteredPassword, setEnteredPassword] = useState('');

  // 이메일을 잘 썻는지 여부
  const [emailIsValid, setEmailIsValid] = useState(null);

  // 패스워드를 잘 썻는지 여부
  const [passwordIsValid, setPasswordIsValid] = useState(null);

  // 패스워드를 잘 썻는지 여부

  // 이메일 값 저장 및 검증
  const handleEmail = (e) => {
    setEnteredEmail(e.target.value);
  };

  // 패스워드 값 저장 및 검증
  const handlePassword = (e) => {
    setEnteredPassword(e.target.value);
  };

  // 이메일 검증
  const validateEmail = (e) => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  // 패스워드 검증
  const validatePassword = (e) => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  return (
    <Card className={styles.login}>
      <form>
        <div
          className={`${styles.control} ${emailIsValid === false ? styles.invalid : ''}`}>
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={enteredEmail}
            onInput={handleEmail}
            onBlur={validateEmail}
          />
        </div>
        <div
          className={`${styles.control} ${passwordIsValid === false ? styles.invalid : ''}`}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={enteredPassword}
            onInput={handlePassword}
            onBlur={validatePassword}
          />
        </div>
        <div className={styles.actions}>
          <Button
            type='submit'
            className={styles.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
