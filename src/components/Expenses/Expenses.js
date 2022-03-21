import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

// function Expenses(props) {
   
    const Expenses = (props) => {
        const[filteredYear, setFilteredYear] = useState('2020');

        const filterChangeHandler = (selectedYear) => {
            setFilteredYear(selectedYear);
        };

        const filteredExpenses = props.items.filter((expense) => {
            return expense.date.getFullYear().toString() === filteredYear;
        });

        

return (
    <div>
    <Card className="expenses">
        <ExpensesFilter selected={filteredYear} 
         onChangeFilter={filterChangeHandler} />
         
         {/*  Alternative way to apply the condition
         {filteredExpenses.length === 0 &&  (<p> No expenses found. </p>)}
        {filteredExpenses.length > 0 && 
        filteredExpenses.map((expense) => (
        <ExpenseItem 
        key = {expense.id}
        name = {expense.name} 
        amount ={expense.amount} 
        date = { expense.date} />)
        )} */}
        <ExpensesChart expenses = {filteredExpenses} />
        <ExpensesList items = {filteredExpenses} />
        </Card>
    </div>
    );}
        
        /* <ExpenseItem 
        name={props.items[0].name} 
     amount ={props.items[0].amount} 
     date = {props.items[0].date} />

     <ExpenseItem name={props.items[1].name} 
     amount ={props.items[1].amount} 
     date = {props.items[1].date} />

     <ExpenseItem name={props.items[2].name} 
     amount ={props.items[2].amount} 
     date = {props.items[2].date} />
     
     <ExpenseItem name={props.items[3].name} 
     amount ={props.items[3].amount} 
     date = {props.items[3].date} /> */

    


export default Expenses;