import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { CountryInterface } from "../interfaces/interfaces";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const location = useLocation();
  const countryCode = location.state.continent.code;
  useEffect(() => {
    axios({
      url: "https://countries.nausicaa.wilders.dev/",
      method: "post",
      data: {
        query: `
        query getContinent($code: ID!) {
            continent(code: $code) {
              code
              name
              countries {
                code
                name
                emoji
              }
            }
          }`,
        variables: { code: countryCode },
      },
      //
    }).then((result) => {
      setCountries(result.data.data.continent.countries);
    });
  }, [countryCode]);
  return (
    <>
      <h1>Countries</h1>
      {countries.map((country: CountryInterface) => {
        return <p>{country.name}</p>;
      })}
    </>
  );
}
