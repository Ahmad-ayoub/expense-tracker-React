import React, { useState } from "react";

function AddExpenseBtn() {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpenseInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddExpense = () => {
    props.addExpense(expenseInput);
    // Reset the input fields after submitting
    setExpenseInput({ value1: "", value2: "", value3: "", value4: "" });
  };

  function ExpenseForm({ onAddExpense }) {
    const handleAddExpense = () => {
      onAddExpense(expenseInput);
      setExpenseInput({ value1: "", value2: "", value3: "", value4: "" });
    };
    const [expenseInput, setExpenseInput] = useState({
      value1: "",
      value2: "",
      value3: "",
      value4: "",
    });
  }

  //debugger;
  return (
    <div>
      <div className="choices">
        <label htmlFor="currencyType">Type:</label>
        <select
          name="value1"
          id="currencyType"
          value={expenseInput.value1}
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
          name="value2"
          id="name"
          placeholder="What did you spend it on?"
          value={expenseInput.value2}
          onChange={handleInputChange}
        />
      </div>

      <div className="choices">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="value3"
          id="date"
          className="selectDate"
          value={expenseInput.value3}
          onChange={handleInputChange}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          type="label"
          name="value4"
          id="amount"
          placeholder="How much?"
          value={expenseInput.value4}
          onChange={handleInputChange}
        />
      </div>

      <button className="button" onClick={handleAddExpense}>
        Add a new expense
      </button>
    </div>
  );
}

export default AddExpenseBtn;
