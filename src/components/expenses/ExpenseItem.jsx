// rafce
import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';

// const ExpenseItem = (props) => {
//   // console.log('props: ', props);
  
//   //렌더링에 필요한 변수 → 1단계 1번 밖에 사용되지 않음: 변수 생성X 바로 입력
//   // const expenseDate = props.date;
//   // const expenseTitle = props.title;
//   // const expensePrice  = props.price;

//   return (
//     <div className='expense-item'>
//       <div>{ props.date.toLocaleString() } </div>
//       <div className='expense-item__description'>
//         <h2>{props.title}</h2>
//         <div className='expense-item__price'>{props.price}원</div>
//       </div>
//     </div>
//   );
// }

// 2단계: 디스턱처링
// const ExpenseItem = ({date, title, price}) => {

//   return (
//     <div className='expense-item'>
//       <div>{ date.toLocaleString() } </div>s
//       <div className='expense-item__description'>
//         <h2>{title}</h2>
//         <div className='expense-item__price'>{price}원</div>
//       </div>
//     </div>
//   );
// }

const ExpenseItem = ({ expense }) => {
  // console.log('props: ', props);
  const { title, price, date } = expense;

  // 원화 표기법으로 변환
  const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

  // 이벤트 핸들러 정의
  function handleClick(e){
    // console.log('click!!');
    // console.log(e.target);
        
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate expenseDate={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{formatPrice}원</div>
      </div>

      <button id='btn1' onClick={handleClick}>버튼1</button>
      <button id='btn2' onClick={e => alert('이벤트!!')}>버튼2</button>
      <button id='btn2' onMouseOver={e => alert('이벤트!!')}>버튼3</button>
      <button id='btn2' onDoubleClick={e => alert('이벤트!!')}>버튼4</button>
      <button id='btn2' onMouseLeave={e => alert('이벤트!!')}>버튼5</button>

    </Card>
  );
};

export default ExpenseItem;