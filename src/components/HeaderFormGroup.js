import React from "react";
import "../styles/HeaderFormGroup.scss";

function Header({ userName }) {
  function onEnterCallBlur(e) {
    console.log("Status change event");
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.blur();
    }
  }
  return (
    <header className="App-header">
      <h2>
        <span style={{ color: "#666" }}>Здравствуйте, </span>
        {userName}
      </h2>

      <input
        id="status"
        name="status"
        type="textarea"
        onKeyDown={onEnterCallBlur}
        onBlur={() => console.log("Status blur event")}
      ></input>
      <label htmlFor="status">сменить статус</label>
    </header>
  );
}

export default Header;
