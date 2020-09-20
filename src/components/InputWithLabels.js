import React from "react";
import "../styles/InputWithLabels.scss";
import blurOnEnter from "../inputBlurOnEnter";

function InputWithLabels(props) {
  const {
    type,
    text,
    inputName,
    note,
    onChange,
    onBlur,
    errorMsg,
    isValid,
    id,
  } = props;
  return (
    <div className="form-group">
      <label>
        <p className="label-text">{text}</p>
        <div>
          <input
            style={{ border: isValid ? "1px solid black" : "1px solid red" }}
            // required
            autoComplete="off"
            type={type}
            name={inputName}
            onChange={onChange}
            onKeyDown={blurOnEnter}
            onBlur={onBlur}
            id={id}
          />
          <p className="error" style={{ opacity: isValid ? "0" : "1" }}>
            {errorMsg}
          </p>
        </div>
      </label>

      <p className="note">{note}</p>
    </div>
  );
}

export default InputWithLabels;
