import React from "react";
import GetStats from "../utils/GetStats";

const CountryStats = ({ country }) => {
  const stats = GetStats(
    `https://covid2019-api.herokuapp.com/v2/country/${country}`
  );

  console.log("stats:" + stats);

  return (
    <div className="country__stat">
      {/* <h1>{country} Covid19 Cases</h1>
      <p>Confirmed: {stats.confirmed}</p>
      <p>Deaths: {stats.deaths}</p>
      <p>Recovered: {stats.recovered}</p> */}
    </div>
  );
};

export default CountryStats;
