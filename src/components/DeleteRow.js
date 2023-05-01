import React from "react";

function DeleteRow({ index, DltRow }) {
  const handleRemoveRow = () => {
    DltRow(index);
  };

  return <button onClick={handleRemoveRow}>Remove</button>;
}

export default DeleteRow;
