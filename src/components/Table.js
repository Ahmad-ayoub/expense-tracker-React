import React from "react";
function Table(props) {
  function returnFormatedExpenses() {
    const { expenses, onDeleteExpense } = props;
    const expensesAsTable = expenses.map((expense, index) => {
      const { type, name, date, amount } = expense;
      return (
        <tr key={index}>
          <td>{type}</td>
          <td>{name}</td>
          <td>{date}</td>
          <td>{amount}</td>
          <td>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onDeleteExpense(index)}
            >
              X
            </button>
          </td>
        </tr>
      );
    });
    return expensesAsTable;
  }

  return (
    <div>
      <div className="d-flex justify-content-center pt-5 w-100">
        <table border="1" className="table">
          <tbody>
            <tr>
              <td className="col-3">type</td>
              <td className="col-3">name</td>
              <td className="col-3">date</td>
              <td className="col-3">amount</td>
              <td className="col-3">delete</td>
            </tr>
            {returnFormatedExpenses()}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
