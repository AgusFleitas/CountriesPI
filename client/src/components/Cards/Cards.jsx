import style from "./Cards.module.css";
import Card from "../Card/Card";

const Cards = ({ allCountries }) => {
  const countriesList = allCountries;

  return (
    <>
      <div className={style.CardsList}>
        {countriesList?.map((country) => (
          <Card country={country} />
        ))}
      </div>
    </>
  );
};

export default Cards;
