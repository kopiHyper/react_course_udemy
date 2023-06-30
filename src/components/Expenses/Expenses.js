import { useState } from "react";

import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

import "../Expenses/Expenses.css";

const Expenses = (props) => {
  // Handling picked year by the user
  const [filteredYear, setFilteredYear] = useState("2020");

  const pickedDate = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // Filter logic
  let expenses = props.items;

  const filteredExpenses = expenses.filter((pickedDate) => {
    return pickedDate.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={pickedDate} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
