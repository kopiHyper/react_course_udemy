import { useState } from "react";
import "../Expenses/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle("Update");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title!</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
