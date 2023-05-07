import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Table from "./Table";
function ExpenseTracker({}) {
  const [expenses, setExpenses] = useState([]);

  const onAddExpense = (expense) => {
    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <ExpenseForm onAddExpense={onAddExpense} />
      <Table expenses={expenses} onDeleteExpense={handleDeleteExpense} />
    </div>
  );
}

export default ExpenseTracker;
