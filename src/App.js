import "./App.css";
import React from "react";
import Titles from "./components/Titles";
import ExpenseTracker from "./components/ExpenseTracker";

function App() {
  return (
    <div>
      <Titles />
      <ExpenseTracker />
    </div>
  );
}

export default App;
