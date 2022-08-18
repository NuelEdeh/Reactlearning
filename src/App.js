import Tweet from "./Tweet";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { name: "Nuel", message: "Hello there" },
    { name: "John", message: "I am John Snow" },
    { name: "Alex", message: "I am pretty cool" },
  ]);

  return (
    <div className="app">
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;
