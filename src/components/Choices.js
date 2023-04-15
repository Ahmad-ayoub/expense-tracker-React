import React from "react";

function Choices() {
  return (
    <div>
      <div class="choices">
        <text>Type:</text>
        <select name="" id="currencyType" class="selectTag">
          <option value="Card">Card</option>
          <option value="Cash">Cash</option>
          <option value="Crypto">Crypto</option>
          <option value="Other">Other</option>
        </select>
        <text>Name:</text>
        <input type="text" id="name" placeholder="What did you spend it on?" />
      </div>

      <div class="choices">
        <text>Date:</text>
        <input type="date" id="date" class="selectDate" />
        <text>Amount:</text>
        <input type="text" id="amount" placeholder="How much?" />
      </div>

      <button class="button" id="calculateExpenses">
        Add a new expense
      </button>
    </div>
  );
}

export default Choices;
