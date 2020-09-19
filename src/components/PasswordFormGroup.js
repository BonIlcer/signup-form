import React, { useState } from "react";
import InputWithLabels from "./InputWithLabels";

function PasswordFormGroup() {
  const [password, setPassword] = useState("");

  const [errMsg1, setErrMsg1] = useState("Укажите пароль");
  const [isValid1, setValid1] = useState(true);

  const [errMsg2, setErrMsg2] = useState("Укажите пароль");
  const [isValid2, setValid2] = useState(true);

  function onChange(e) {
    setPassword(e.target.value);
  }

  function validatePassword(e) {
    if (e.target.value === "") {
      setValid1(false);
    } else if (e.target.value.length < 5) {
      setErrMsg1("Используйте не менее 5 символов");
      setValid1(false);
    } else {
      setValid1(true);
    }
  }

  function validatePasswordCheck(e) {
    if (e.target.value === "") {
      setValid2(false);
    } else if (e.target.value !== password) {
      setErrMsg2("Пароли не совпадают");
      setValid2(false);
    } else {
      setValid2(true);
    }
  }

  return (
    <div>
      <InputWithLabels
        type="password"
        text="Пароль"
        inputName="password"
        note="Ваш новый пароль должен содержать не менее 5 символов"
        onChange={onChange}
        onBlur={validatePassword}
        errorMsg={errMsg1}
        isValid={isValid1}
      />
      <InputWithLabels
        type="password"
        text="Пароль еще раз"
        note="Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки"
        onBlur={validatePasswordCheck}
        errorMsg={errMsg2}
        isValid={isValid2}
      />
    </div>
  );
}

export default PasswordFormGroup;
