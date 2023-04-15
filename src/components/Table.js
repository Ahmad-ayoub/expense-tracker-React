import React from "react";

function Table() {
  return (
    <div>
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

export default Table;
