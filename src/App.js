import React, { useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import  Greet  from './components/Greet';
// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
// import Card from './components/Card';
import NewExpense from './components/NewExpense/NewExpense';
import { render } from '@testing-library/react';
//import ExpenseForm from './components/NewExpense/ExpenseForm';
import Counter from './components/Counter';
import { Component } from 'react/cjs/react.production.min';
import ComponentUseState from './hooks/ComponentUseState';
import ComponentUseReducer from './hooks/ComponentUseReducer';
import ComponentUseEffect from './hooks/ComponentUseEffect';
import ComponentUseRef from './hooks/ComponentUseRef';
import ComponentUseMemo from './hooks/ComponentMemo';
import ComponentLayoutEffect from './hooks/ComponentLayoutEffect';
import ComponentUseCallBack from './hooks/callback/ComponentUseCallback';
import ComponentUseContext from './hooks/context/ComponentUseContext';
import ImperativeHandle from './hooks/imperative/ImperativeHandle';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    name: 'Phone',
    amount: 20094.12,
    date: new Date(2020, 11, 14),
  },
  { id: 'e2', 
  name: 'New TV', 
  amount: 26799, 
  date: new Date(2021, 10, 12) },
  {
    id: 'e3',
    name: 'Car Insurance',
    amount: 10000,
    date: new Date(2021, 9, 28),
  },
  {
    id: 'e4',
    name: 'New Desk (Wooden)',
    amount: 3450,
    date: new Date(2021, 11, 12),
  },
];

//function App() {
  const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
 // return  React.createElement('div' , {}, 
 // React.createElement(Greet), 
 // React.createElement('h2', {}, "Have a good day"),
 // React.createElement(Expenses, { items: expenses })

 // );
 
 const addExpenseHandler = expense => {
   setExpenses((prevExpenses) => {
     return [expense, ...prevExpenses]
   });

  //  console.log('In App.js');
  //  console.log('expense');
  }
  return (
     <div className="App">
     <Greet />
     <div className='side'>
       {/* <ComponentUseState />
     <ComponentUseEffect /> 
     <ComponentUseReducer />
     <ComponentUseRef />
     <ComponentUseMemo />
     <ComponentLayoutEffect />
     <ComponentUseCallBack />
     <ComponentUseContext />*/}
     <ImperativeHandle />
     </div>
    <h2>Have a good day</h2>
    <Counter />
    <NewExpense onAddExpense = {addExpenseHandler} />
    <Expenses items ={expenses} />
    
    </div>
  )  };


  
export default App;