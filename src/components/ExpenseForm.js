import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [expenseInput, setExpenseInput] = useState({
    type: "Card",
    name: "",
    date: "",
    amount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpenseInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddExpense = (event) => {
    event.preventDefault();
    onAddExpense(expenseInput);
    setExpenseInput({ type: "Card", name: "", date: "", amount: "" });
  };

  return (
    <div>
      <form onSubmit={handleAddExpense}>
        <div className="choices">
          <label htmlFor="currencyType">Type:</label>
          <select
            name="type"
            id="currencyType"
            value={expenseInput.type}
            onChange={handleInputChange}
            className="selectTag"
          >
            <option value="Card">Card</option>
            <option value="Cash">Cash</option>
            <option value="Crypto">Crypto</option>
            <option value="Other">Other</option>
          </select>
          <label htmlFor="name">Name:</label>
          <input
            type="label"
            name="name"
            id="name"
            placeholder="What did you spend it on?"
            value={expenseInput.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="choices">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            name="date"
            id="date"
            className="selectDate"
            value={expenseInput.date}
            onChange={handleInputChange}
          />
          <label htmlFor="amount">Amount:</label>
          <input
            type="label"
            name="amount"
            id="amount"
            placeholder="How much?"
            value={expenseInput.amount}
            onChange={handleInputChange}
          />
        </div>

        <button className="button" type="submit">
          Add a new expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
