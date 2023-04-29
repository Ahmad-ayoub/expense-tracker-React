import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function DeleteRow({ DltRow }) {
  const [expenseLists, setExpenseList] = useState([]);

  const RemoveRow = (index) => {
    setExpenseList(
      expenseLists.filter((expenseList) => expenseList.index !== index)
    );
  };

  return <RemoveRow DltRow={RemoveRow} />;
}

export default DeleteRow;
