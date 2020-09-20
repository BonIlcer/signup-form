import React, { useState } from "react";
import "../styles/HeaderFormGroup.scss";
import blurOnEnter from "../inputBlurOnEnter";

function HeaderFormGroup({ userName }) {
  const [status, setStatus] = useState("Прежде чем действовать, надо понять");
  function statusOnChange(e) {
    setStatus(e.target.value);
  }
  return (
    <div className="header">
      <span
        className="header-text"
        style={{ color: "#666", minWidth: "200px" }}
      >
        Здравствуйте,{" "}
      </span>
      <div style={{ display: "grid" }}>
        <p className="header-text">{userName}</p>
        <label className="status-label" htmlFor="status">
          сменить статус
        </label>

        <div className="triangle" />
        <input
          className="status-input"
          id="status"
          name="status"
          type="textarea"
          onKeyDown={blurOnEnter}
          value={status}
          onChange={statusOnChange}
        />
      </div>
    </div>
  );
}

export default HeaderFormGroup;
