import React, { useState } from "react";

function AddExpenseBtn() {
  const [expenseInput, setExpenseInput] = useState({
    value1: "",
    value2: "",
    value3: "",
    value4: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpenseInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddExpense = () => {
    console.log(expenseInput);
  };
  //debugger;
  return (
    <div>
      <div class="choices">
        <text>Type:</text>
        <select
          name="typeOfCurrency"
          id="currencyType"
          value={expenseInput.value1}
          onChange={handleInputChange}
          class="selectTag"
        >
          <option value="Card">Card</option>
          <option value="Cash">Cash</option>
          <option value="Crypto">Crypto</option>
          <option value="Other">Other</option>
        </select>
        <text>Name:</text>
        <input
          type="text"
          id="name"
          placeholder="What did you spend it on?"
          value={expenseInput.value2}
          onChange={handleInputChange}
        />
      </div>

      <div class="choices">
        <text>Date:</text>
        <input
          type="date"
          id="date"
          class="selectDate"
          value={expenseInput.value3}
          onChange={handleInputChange}
        />
        <text>Amount:</text>
        <input
          type="text"
          id="amount"
          placeholder="How much?"
          value={expenseInput.value4}
          onChange={handleInputChange}
        />
      </div>

      <button class="button" onClick={handleAddExpense}>
        Add a new expense
      </button>
    </div>
  );
}

export default AddExpenseBtn;
