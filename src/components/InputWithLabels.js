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
        {text}
        <input
          // required
          autoComplete="off"
          type={type}
          name={inputName}
          onChange={onChange}
          onKeyDown={blurOnEnter}
          onBlur={onBlur}
          id={id}
        />
        <p style={{ opacity: isValid ? "0" : "1" }}>{errorMsg}</p>
      </label>

      <p>{note}</p>
    </div>
  );
}

export default InputWithLabels;
