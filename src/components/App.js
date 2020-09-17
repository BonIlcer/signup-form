import React from "react";
import "../styles/App.scss";
import HeaderFormGroup from "./HeaderFormGroup";
import InputWithLabels from "./InputWithLabels";
import PasswordFormGroup from "./PasswordFormGroup";
import SelectCity from "./SelectCity";

function App() {
  const userName = "Человек №0123456";

  function onSubmitForm(event) {
    event.preventDefault();
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

        <PasswordFormGroup />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
