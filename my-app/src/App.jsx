import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import NavbarComponent from "./components/Nav/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  function handleClick(event) {
    event.preventDefault();
    toast.success("Todo erstellt!");

    if (inputValue) {
      setList([...list, inputValue]);
      setInputValue("");
    }
  }

  function handleRemove(index) {
    const updatedList = list.filter((item, i) => i !== index);
    toast.error("Todo gelöscht!");
    setList(updatedList);
  }

  return (
    <>
      <NavbarComponent />
      <div className="container">
        <form onSubmit={handleClick}>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />

          <button type="submit">Füge Todo Hinzu</button>
        </form>
        <ul>
          {list.map((item, index) => (
            <li key={index} onClick={() => handleRemove(index)}>
              {item}
            </li>
          ))}
        </ul>
        <App />
      </div>

      <ToastContainer />
    </>
  );
}
export default App;
