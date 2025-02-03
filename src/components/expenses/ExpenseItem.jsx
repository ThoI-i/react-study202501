import React from 'react'
import './ExpenseItem.css'

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
const ExpenseItem = ({date, title, price}) => {

  return (
    <div className='expense-item'>
      <div>{ date.toLocaleString() } </div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{price}원</div>
      </div>
    </div>
  );
}

export default ExpenseItem