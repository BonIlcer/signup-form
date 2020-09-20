import React from "react";
import InputWithLabels from "./InputWithLabels";

function NewsletterFormGroup() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <InputWithLabels
        type="checkbox"
        text="Я согласен"
        inputName="newsletter"
        id="newsletter"
      />
      <label htmlFor="newsletter">
        принимать актуальную информацию на емейл
      </label>
    </div>
  );
}

export default NewsletterFormGroup;
