import React from "react";
function Table({ expenses, onDeleteExpense }) {
  return (
    <div>
      <div className="d-flex justify-content-center pt-5 w-100">
        <table border="1" className="table">
          <tbody>
            <tr>
              <td className="col-1">type</td>
              <td className="col-6">name</td>
              <td>date</td>
              <td>amount</td>
            </tr>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.type}</td>
                <td>{expense.name}</td>
                <td>{expense.date}</td>
                <td>{expense.amount}</td>
                <td>
                  <button onClick={() => onDeleteExpense(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
