import React, { useState } from "react";
import InputWithLabels from "./InputWithLabels";

function PasswordFormGroup() {
  const [password, setPassword] = useState("");
  function onChange(e) {
    setPassword(e.target.value);
  }
  function validatePassword(e) {
    if (e.target.value === "") {
      console.log("Invalid");
    } else if (e.target.value.length < 5) {
      console.log("Invalid: len < 5");
    }
  }

  function validatePasswordCheck(e) {
    if (e.target.value === "") {
      console.log("Invalid");
    } else if (e.target.value !== password) {
      console.log("not equal");
      return;
    }
    console.log("Passwords equal");
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
      />
      <InputWithLabels
        type="password"
        text="Пароль еще раз"
        note="Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки"
        onBlur={validatePasswordCheck}
      />
    </div>
  );
}

export default PasswordFormGroup;
