import React from "react";
function Table({ expenses }) {
  return (
    <div>
      <div className="table_Container">
        <table border="1" className="table">
          <tbody className="adjustCells">
            <tr>
              <td className="col-type">type</td>
              <td className="col-name">name</td>
              <td className="col-date">date</td>
              <td className="col-amount">amount</td>
            </tr>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.type}</td>
                <td>{expense.name}</td>
                <td>{expense.date}</td>
                <td>{expense.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
