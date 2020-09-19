import React, { useState } from "react";
import "../styles/App.scss";
import triggerEvent from "../triggerEvent";
import EmailFormGroup from "./EmailFormGroup";
import HeaderFormGroup from "./HeaderFormGroup";
import PasswordFormGroup from "./PasswordFormGroup";
import SelectCityFormGroup from "./SelectCityFormGroup";

function triggerBlur() {
  console.log("trigger blur");
  const password = document.getElementById("password");
  triggerEvent(password, "blur");
  const passwordCheck = document.getElementById("passwordCheck");
  triggerEvent(passwordCheck, "blur");
  const email = document.getElementById("email");
  triggerEvent(email, "blur");
}

function App() {
  const userName = "Человек №0123456";
  const [updateDate, setUpdateDate] = useState(new Date());

  function onSubmitForm(e) {
    e.preventDefault();
    setUpdateDate(new Date());

    triggerBlur();

    const formData = new FormData(e.target);
    const obj = {};
    formData.forEach((value, key) => (obj[key] = value));
    const jsonFormData = JSON.stringify(obj);
    console.log(jsonFormData);
  }
  return (
    <div className="App">
      <form onSubmit={onSubmitForm}>
        <HeaderFormGroup userName={userName} />
        <SelectCityFormGroup />
        <hr />
        <PasswordFormGroup />
        <hr />
        <EmailFormGroup />
        <input type="submit" value="Изменить" />

        <p>
          {"последние изменения " +
            updateDate.toLocaleString("ru", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }) +
            " в " +
            updateDate.toLocaleTimeString()}
        </p>
      </form>
    </div>
  );
}

export default App;
