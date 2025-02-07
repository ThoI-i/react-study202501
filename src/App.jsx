import { useState } from 'react';
import './App.css';
import MainHeader from './components/SideEffect/MainHeader';
import Home from './components/SideEffect/Home';
import Login from './components/SideEffect/Login';

// 컴포넌트
const App = () => {

  // 로그인 상태 체크
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인 수행 함수를 전달
  const handleLogin = (email, password) => { 

    // 검증
    if (email === 'abc@def.com' && password === '12345678') {
      localStorage.setItem('login-flag', '1');
      setIsLoggedIn(true);
    } else {
      alert('로그인 실패!');
    }
  };

  return <>
    <MainHeader />
    <main>
      {isLoggedIn && <Home />}
      {!isLoggedIn && <Login onLogin={handleLogin} />}
    </main>
  </>;
};

export default App;