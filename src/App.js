import "./App.css";
import React from "react";
import Titles from "./components/Titles";
import Choices from "./components/Choices";
import Table from "./components/Table";

function App() {
  return (
    <div>
      <Titles />
      <Choices />
      <Table />
    </div>
  );
}

export default App;
