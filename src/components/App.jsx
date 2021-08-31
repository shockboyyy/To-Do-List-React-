import React, { useState } from "react";

function App() {
  const [list, setList] = useState("");
  const [array, setArray] = useState([]);

  function handleChange(event) {
    const num = event.target.value;
    return setList(num);
  }

  function Submit() {
    setArray((prev) => {
      return [...prev, list];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" />
        <button onClick={Submit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {array.map((x) => (
            <li>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
