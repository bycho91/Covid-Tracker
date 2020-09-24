import React from "react";
import GetStats from "../utils/GetStats";

const CountrySelector = () => {
  const countries = GetStats("https://covid2019-api.herokuapp.com/countries");
  console.log(countries);

  if (!countries) return <p>Loading...</p>;
  return (
    <div className="country__selector">
      {Object.entries(countries).map(([id, country]) =>
        console.log(`${id}: ${country}`)
      )}
    </div>
  );
};

export default CountrySelector;
