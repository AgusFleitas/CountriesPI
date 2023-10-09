import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

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
      <button onClick={goBack}>Back</button>
      <h2>This is the detail of: {country.name}</h2>
      <img src={country.flag} />
      <h4>Name: {country.name}</h4>
      <h4>Continent: {country.continent}</h4>
      <h4>Capital: {country.capital}</h4>
      <h4>Subregion: {country.subregion}</h4>
      <h4>Area: {country.area}</h4>
      <h4>Population: {country.population}</h4>
      <h4>Activities: </h4>
      {activities.length > 0 ? (
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>
              <h5>{activity.name}</h5>
            </li>
          ))}
        </ul>
      ) : (
        <p>This country has no activities yet.</p>
      )}
    </>
  );
};

export default Detail;
