import { useState, useEffect } from "react";

const GetStats = (url) => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url)
        .then((res) => res.json())
        .catch((err) => console.log(err));

      if (url === "https://covid2019-api.herokuapp.com/countries") {
        setStats(data.countries);
      } else if (
        url.includes("https://covid2019-api.herokuapp.com/v2/country/")
      ) {
        setStats(data);
      } else {
        setStats(data.data);
      }
    };

    fetchData();
  }, []);

  return stats;
};

export default GetStats;
