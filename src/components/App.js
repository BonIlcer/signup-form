import React from "react";
import "../styles/App.scss";
import Header from "./HeaderFormGroup";
import InputWithLabels from "./InputWithLabels";
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
        <Header userName={userName} />
        <SelectCity />

        <InputWithLabels
          type="password"
          text="Пароль"
          inputName="password"
          note="Ваш новый пароль должен содержать не менее 5 символов"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
