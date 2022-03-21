import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
     const [enteredAmount, setEnteredAmount] = useState('');
     const [enteredDate, setEnteredDate] = useState(''); // instead of these 3 lines we can write next 4 lines.(single useState)
 // const[userInput, setUserInput] = useState({     Alterntive way 1 & 2(single useState)
    //  enteredTitle: '',
     // enteredAmount: '',
     // enteredDate: '',
 //})

    const nameChangeHandler = (event) => {
         setEnteredTitle(event.target.value); //this line is used in multiple useState
        
        // setUserInput({    Alterntive way 1 (single useState)
        //  ...userInput,       Alterntive way 1
           // enteredTitle: event.target.value,     Alterntive way 1
       // });       Alterntive way 1
       // setUserInput((prevState) => {     Alterntive way 2  (single useState)
        // return{...prevState,enteredTitle:event.target.value}     Alterntive way 2
    //}); Alternative way 2

    };

   //  const [enterdeName, setEnterdName] = useState('');
     // const nameChangeHandler = (event) => {
      //  setEnterdName(event.target.value);
   // };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value); //this line is used in multiple useState
      
     //  setUserInput({
        // ...userInput,
        // enteredAmount: event.target.value,
    //});
   
    };
    const dateChangeHandler = (event) => {
         setEnteredDate(event.target.value); //this line is used in multiple useState
      // setUserInput({
       // ...userInput,
        // enteredDate: event.target.value,
    // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            name:enteredTitle,
            amount: +enteredAmount,
            date: new Date (enteredDate),
        };

        //console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
        <div className="new-expense__controls">
            <label>Title</label>
            <input type={ "text"}  value={enteredTitle} onChange={nameChangeHandler} />
            </div>
            <div className="new-expense__controls">
            <label>Amount</label>
            <input type={ "number"}   min={0.01} step={0.01} value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__controls">
            <label>Date</label>
            <input type={ "date"} min="2021-01-01" max="2022-12-30" value={enteredDate} onChange={dateChangeHandler} />
            </div>
            <div className="new-expense__actions">
                <button type="submit"> Add Expense</button>
            </div>
        </div>
    </form>
    )
};

export default ExpenseForm;