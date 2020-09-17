import React from "react";
import "../styles/InputWithLabels.scss";

function InputWithLabels(props) {
  const { type, text, inputName, note } = props;
  return (
    <div className="form-group">
      <label>
        {text}
        <input required autoComplete="off" type={type} name={inputName} />
      </label>

      <p>{note}</p>
    </div>
  );
}

export default InputWithLabels;
