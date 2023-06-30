import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Handling enetered data by user
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmonut, setEnteredAmonut] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isAddingExpense, setIsAddingExpense] = useState(false);

  function wantAddExpense() {
    setIsAddingExpense(true);
  }

  function isCanceling() {
    setIsAddingExpense(false);
  }

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmonut(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // Sending the entered data to the NewExpense component
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmonut,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    // Clearing the form after submiting and closing it
    setIsAddingExpense(false);
    setEnteredTitle("");
    setEnteredAmonut("");
    setEnteredDate("");
  };

  return isAddingExpense ? (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmonut}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={isCanceling}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  ) : (
    <div className="new-expense__actionsAdd">
      <button onClick={wantAddExpense}>Add New Expense</button>
    </div>
  );
};

export default ExpenseForm;
