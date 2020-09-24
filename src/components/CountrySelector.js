import React from "react";
import GetStats from "../utils/GetStats";
import CountryStats from "./CountryStats";

const CountrySelector = () => {
  const [country, setCountry] = React.useState("");
  const countries = GetStats("https://covid2019-api.herokuapp.com/countries");

  if (!countries) return <p>Loading...</p>;
  return (
    <div className="country__selector">
      <select onChange={(e) => setCountry(e.target.value)}>
        {Object.entries(countries).map(([id, country]) => (
          <option value={country} key={id}>
            {country}
          </option>
        ))}
      </select>
      <CountryStats country={country} />
    </div>
  );
};

export default CountrySelector;
