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
                <td>{expense.value1}</td>
                <td>{expense.value2}</td>
                <td>{expense.value3}</td>
                <td>{expense.value4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
