import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';
function NewExpense(props){
function onSaveExpenseData(enteredexpensedata){
    const expenseData={
        ...enteredexpensedata,
        id: Math.random().toString()
    } 
    props.onAddExpense(expenseData);
}
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseData}/>
        </div>
    );
};
export default NewExpense;