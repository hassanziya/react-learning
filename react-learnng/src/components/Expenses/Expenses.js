import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2020");
  // const [filteredExpenseObj, setfilteredExpenseObj] = useState(props.expenses);
  const saveExpenseFilterDateHandler = (enteredExpensefilterDate) => {
    setfilteredYear(enteredExpensefilterDate);
  };
  const filterExpenses = props.expenses.filter((item) => {
    return item.date.getFullYear() == filteredYear;
  });
  // setfilteredExpenseObj(filterExpenses);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSaveExpenseFilterDate={saveExpenseFilterDateHandler}
      />
      <ExpensesChart expenses={filterExpenses} />
      <ExpensesList expenses={filterExpenses} />
    </Card>
  );
}

export default Expenses;
