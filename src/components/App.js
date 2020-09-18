import React, { useState } from "react";
import "../styles/App.scss";
import HeaderFormGroup from "./HeaderFormGroup";
import PasswordFormGroup from "./PasswordFormGroup";
import SelectCity from "./SelectCity";

function App() {
  const userName = "Человек №0123456";
  const [updateDate, setUpdateDate] = useState(new Date());

  function onSubmitForm(event) {
    event.preventDefault();
    setUpdateDate(new Date());
    const formData = new FormData(event.target);
    const obj = {};
    formData.forEach((value, key) => (obj[key] = value));

    console.log(JSON.stringify(obj));
  }
  return (
    <div className="App">
      <form onSubmit={onSubmitForm}>
        <HeaderFormGroup userName={userName} />
        <SelectCity />
        <hr />
        <PasswordFormGroup />
        <hr />
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
