import { Link } from "react-router-dom";

import style from "./Card.module.css";

function Card({ country }) {
  const { name, continent, flag, id } = country;

  return (
    <>
      <div className={style.cardContainer}>
        <Link to={`/detail/${id}`}>
        <img src={flag} />
        <h2>{name}</h2>
        <h3>{continent}</h3>
        </Link>
      </div>
    </>
  );
}

export default Card;