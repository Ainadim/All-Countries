import React, { useEffect, useState } from "react";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>There are total {countries.length} Countries</h1>
      {countries.map((country) => {
        return (
          <div className="country-details">
            <h5>Name: {country.name.common}</h5>
            <h6>Language: {country.languages[0].name}</h6>
            <img src={country.flags.png} alt="Flags" />
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
