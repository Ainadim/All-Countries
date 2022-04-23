import React, { useEffect, useState } from "react";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>There are total {countries.length} Countries</h1>
      <div className="all-country">
        {countries.map((country) => {
          console.log(country.languages);
          return (
            <div className="country-details">
              <h5>Name: {country.name.common}</h5>
              <h5>
                Language:
                {country.languages &&
                  Object.values(country.languages).map((lan) => (
                    <>
                      <span>{lan}</span>
                      <br />
                    </>
                  ))}
              </h5>
              <h6>Capital: {country.capital}</h6>
              <img src={country.flags.png} alt="Flags" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
