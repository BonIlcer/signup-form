import React from "react";
import data from "../cities.json";

function requiredList() {
  // population > 50k & descending order
  let bigCities = data
    .filter((item) => item.population > 50000)
    .sort((a, b) => b.population - a.population);
  const result = bigCities.splice(0, 1);
  bigCities.sort((a, b) => (a.city > b.city ? 1 : -1));
  bigCities.map((item) => result.push(item));
  return result;
}

function SelectCityFormGroup() {
  const cityList = requiredList();
  //console.log("Required list of cities:\n", cityList);
  const options = cityList.map((item) => (
    <option key={item.city}>{item.city}</option>
  ));
  return (
    <div>
      <label>
        Город
        <select name="city">{options}</select>
      </label>
    </div>
  );
}

export default SelectCityFormGroup;
