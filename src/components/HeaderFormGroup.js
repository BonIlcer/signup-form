import React from "react";
import "../styles/HeaderFormGroup.scss";
import blurOnEnter from "../inputBlurOnEnter";

function HeaderFormGroup({ userName }) {
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
        onKeyDown={blurOnEnter}
        onBlur={() => console.log("Status blur event")}
      ></input>
      <label htmlFor="status">сменить статус</label>
    </header>
  );
}

export default HeaderFormGroup;
