import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const defaultExpense = {
    type: "Card",
    name: "",
    date: "",
    amount: "",
  };

  const [expenseInput, setExpenseInput] = useState(defaultExpense);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpenseInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddExpense = (event) => {
    event.preventDefault();
    onAddExpense(expenseInput);
    setExpenseInput(defaultExpense);
  };

  return (
    <div>
      <form onSubmit={handleAddExpense}>
        <div className="pt-4 pb-4">
          <label htmlFor="currencyType">Type:</label>
          <select
            name="type"
            id="currencyType"
            value={expenseInput.type}
            onChange={handleInputChange}
            className="m-3"
          >
            <option value="Card">Card</option>
            <option value="Cash">Cash</option>
            <option value="Crypto">Crypto</option>
            <option value="Other">Other</option>
          </select>
          <label htmlFor="name" className="m-3">
            Name:
          </label>
          <input
            type="label"
            name="name"
            id="name"
            placeholder="What did you spend it on?"
            value={expenseInput.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="pt-4 pb-4">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            name="date"
            id="date"
            className="m-3"
            value={expenseInput.date}
            onChange={handleInputChange}
          />
          <label htmlFor="amount" className="m-3">
            Amount:
          </label>
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
