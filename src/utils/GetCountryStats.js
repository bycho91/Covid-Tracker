import { useState, useEffect } from "react";

const GetCountryStats = (url) => {
  const [countryStats, setCountryStats] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url)
        .then((res) => res.json())
        .catch((err) => console.log(err));

      setCountryStats({
        confirmed: data.data.confirmed,
        deaths: data.data.deaths,
        recovered: data.data.recovered,
      });
    };

    fetchData();
  }, []);

  return countryStats;
};

export default GetCountryStats;
