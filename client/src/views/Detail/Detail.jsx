import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState({});
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios(`http://localhost:3001/countries/${id}`).then(({ data }) => {
      if (data.name) {
        setCountry(data);
        setActivities(data.Activities);
      } else {
        window.alert("No se encuentra el país solicitado");
      }
    });
    return setCountry({});
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={style.cardWrapper}>
        <div className={style.card}>
          <div className={style.imageContent}>
            <span className={style.overlay}></span>
            <div className={style.cardImage}>
              <img className={style.cardImg} src={country.flag} />
            </div>
          </div>
          <div className={style.cardContent}>
            <h2 className={style.name}>More info about {country.name}</h2>
            <p className={style.info}>
              <span>Continent: </span> {country.continent}
            </p>
            <p className={style.info}>
              <span>Capital: </span> {country.capital}
            </p>
            <p className={style.info}>
              <span>Subregion: </span> {country.subregion}
            </p>
            <p className={style.info}>
            <span>Area: </span> {country.area}</p>
            <p className={style.info}>
            <span>Population: </span> {country.population}</p>
            <div className={style.activitiesList}>
              <p className={style.info}>
              <span>Activities</span> on this country: </p>
              {activities.length > 0 ? (
                <ul>
                  {activities.map((activity) => (
                    <li key={activity.id}>
                      <h5>{activity.name}</h5>
                    </li>
                  ))}
                </ul>
              ) : (
                <span>This country has no activities yet.</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
