import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

 
// function ExpenseItem (props){
    const ExpenseItem = (props) => {
               
//const expenseDate = new Date(2021, 11, 21);
//const expenseTitle = 'car  Insurance';
//const expenseAmount = 100000;


// <div>Date: {props.date.toDateString()}</div>

return (
    <li>
 <Card className='expense-item'>
    <ExpenseDate date={props.date}/>
    <div className='expense-item__description'>
        <h2>Title: {props.name}</h2>
        <div className='expense-item__price'>Amount: Rs.{props.amount}</div>
    </div>
   
</Card>
</li>
);
}

export default ExpenseItem;