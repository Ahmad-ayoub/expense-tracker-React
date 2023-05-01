import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Table from "./Table";
function ExpenseTracker({}) {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <Table expenses={expenses} onDeleteExpense={handleDeleteExpense} />
    </div>
  );
}

export default ExpenseTracker;
