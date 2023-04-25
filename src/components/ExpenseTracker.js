import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Table from "./Table";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <Table expenses={expenses} />
    </div>
  );
}

export default ExpenseTracker;
