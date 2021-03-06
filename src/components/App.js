import React, { useState } from "react";
import "../styles/App.scss";
import triggerEvent from "../triggerEvent";
import EmailFormGroup from "./EmailFormGroup";
import HeaderFormGroup from "./HeaderFormGroup";
import NewsletterFormGroup from "./NewsletterFormGroup";
import PasswordFormGroup from "./PasswordFormGroup";
import SelectCityFormGroup from "./SelectCityFormGroup";
import useWindowSize from "../useWindowSize";

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
  const { width } = useWindowSize();

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

        <NewsletterFormGroup />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: width > 700 ? "200px" : "0px",
          }}
        >
          <input className="button" type="submit" value="Изменить" />

          <p
            style={{ marginLeft: "20px", color: "#999999", fontSize: "0.6em" }}
          >
            {"последние изменения " +
              updateDate.toLocaleString("ru", {
                day: "numeric",
                month: "long",
                year: "numeric",
              }) +
              " в " +
              updateDate.toLocaleTimeString()}
          </p>
        </div>
      </form>
    </div>
  );
}

export default App;
