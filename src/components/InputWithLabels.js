import React from "react";
import "../styles/InputWithLabels.scss";
import blurOnEnter from "../inputBlurOnEnter";

function InputWithLabels(props) {
  const { type, text, inputName, note, onChange, onBlur } = props;
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
        />
      </label>

      <p>{note}</p>
    </div>
  );
}

export default InputWithLabels;
