import React from "react";
import GetStats from "../utils/GetStats";

const Stats = () => {
  const stats = GetStats("https://covid2019-api.herokuapp.com/v2/total");

  if (!stats) return <p>Loading...</p>;

  return (
    <div className="stats">
      <h1>Global Covid19 Cases</h1>
      <p>Confirmed: {stats.confirmed}</p>
      <p>Deaths: {stats.deaths}</p>
      <p>Recovered: {stats.recovered}</p>
    </div>
  );
};

export default Stats;
