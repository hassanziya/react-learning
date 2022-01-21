import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setisEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisEditing(false);
  };
  const formRenderHandler = () => {
    setisEditing(true);
  };

  const stopEditing = () => {
    setisEditing(false);
  };
  return (
    <Card className="new-expense">
      {!isEditing && (
        <button type="submit" onClick={formRenderHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditing}
        />
      )}
    </Card>
  );
};

export default NewExpense;
