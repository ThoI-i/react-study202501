import React, { useState } from 'react';

const TimerChallenge = ({ title, targetTime }) => {

  // 타이머가 시작되었는지를 확인하는 상태값
  const [timerStarted, setTimerStarted] = useState(false);

  const handleStart = e => { 

    setTimerStarted(true);
  };

  return (
    <section className='challenge'>
      <h2>{title}</h2>
      <p className='challenge-time'>
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={handleStart}>
          {timerStarted ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className=''>
        {timerStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  );
};

export default TimerChallenge;
