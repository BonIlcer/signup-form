import React, { useState } from "react";
import InputWithLabels from "./InputWithLabels";

function EmailFormGroup() {
  const [errMsg, setErrMsg] = useState("Укажите E-mail");
  const [isValid, setValid] = useState(true);

  const regex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");

  function validateEmail(e) {
    if (e.target.value === "") {
      setValid(false);
    } else if (!regex.test(e.target.value)) {
      setErrMsg("Неверный E-mail");
      setValid(false);
    } else {
      setValid(true);
    }
  }
  return (
    <div>
      <InputWithLabels
        type="text"
        text="Электронная почта"
        inputName="email"
        note="Можно изменить адрес, указанный при регистрации"
        onBlur={validateEmail}
        errorMsg={errMsg}
        isValid={isValid}
        id="email"
      />
    </div>
  );
}

export default EmailFormGroup;
