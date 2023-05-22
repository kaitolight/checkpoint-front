import { useState, useEffect } from "react";
import "../styles/continents.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ContinentsInterface } from "../interfaces/interfaces";

export default function Continents() {
  const [continents, setContinents] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios({
      url: "https://countries.nausicaa.wilders.dev/",
      method: "post",
      data: {
        query: `
                  query getContinents {
                      continents {
                        code
                        name
                      }
                    }`,
      },
    }).then((result) => {
      setContinents(result.data.data.continents);
    });
  }, []);

  return (
    <>
      <h1 className="title">CHECKPOINT FRONT</h1>
      <h2>Continents</h2>
      <div className="continentsFlex">
        {continents.map((continent: ContinentsInterface) => {
          return (
            <div className="continentsName" key={continent.code}>
              <p
                onClick={() =>
                  navigate(`/countries/${continent.name}`, {
                    replace: true,
                    state: { continent },
                  })
                }
              >
                {continent.name}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
