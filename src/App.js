import React, { useState, useEffect } from "react";
import "./App.css";
//component imports
import GlobalStats from "./components/GlobalStats";
import GetStats from "./utils/GetStats";
import CountrySelector from "./components/CountrySelector";
import CountryStats from "./components/CountryStats";

const App = () => {
  return (
    <div className="App">
      <h1>Covid Tracker</h1>
      <GlobalStats />
      <CountrySelector />
      <CountryStats />
    </div>
  );
};

export default App;
