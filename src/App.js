import React, { useState, useEffect } from "react";
import "./App.css";
//component imports
import GlobalStats from "./components/GlobalStats";
import GetStats from "./utils/GetStats";
import CountrySelector from "./components/CountrySelector";

const App = () => {
  return (
    <div className="App">
      <h1>Covid Tracker</h1>
      <GlobalStats />
      <CountrySelector />
    </div>
  );
};

export default App;
