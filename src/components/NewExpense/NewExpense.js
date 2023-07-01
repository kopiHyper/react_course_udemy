import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isAddingExpense, setIsAddingExpense] = useState(false);

  function wantAddExpense() {
    setIsAddingExpense(true);
  }

  function canceledForm() {
    setIsAddingExpense(false);
  }
  // Adding an id to the entered expense by user
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    props.onAddExpense(expenseData);
    setIsAddingExpense(false);
  };

  return (
    <div className="new-expense">
      {!isAddingExpense && (
        <button onClick={wantAddExpense}>Add New Expense</button>
      )}
      {isAddingExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={canceledForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
