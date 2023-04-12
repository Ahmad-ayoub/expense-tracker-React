import "./App.css";

function App() {
  return (
    <div className="body">
      <title>Expense_Tracker</title>
      <h1 class="title_1">Simple expense manager project</h1>
      <h2 class="title_2">Add a new item:</h2>

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

      <div class="table_Container">
        <table border="1" class="table">
          <tbody class="adjustCells">
            <tr>
              <td class="col-type">type</td>
              <td class="col-name">name</td>
              <td class="col-date">date</td>
              <td class="col-amount">amount</td>
            </tr>
          </tbody>

          <tr id="tablePlaceholder" class="tablePlaceholder">
            <td colspan="4">Your added items will show up here!</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
