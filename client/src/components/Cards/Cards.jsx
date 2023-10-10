import style from "./Cards.module.css";
import Card from "../Card/Card";

const Cards = ({ items, prevHandler, nextHandler, currentPage }) => {
  return (
    <>
      <div className={style.CardsList}>
        {items?.map((country) => (
          <Card country={country} key={country.id} />
        ))}
      </div>
      <div className={style.Pagination}>
        <button onClick={prevHandler}>Prev</button>
        <h2>{currentPage}</h2>
        <button onClick={nextHandler}>Next</button>
      </div>
    </>
  );
};

export default Cards;
