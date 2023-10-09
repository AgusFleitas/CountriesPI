import style from "./SearchBar.module.css";

const SearchBar = ({handleChange, handleSubmit}) => {
    return (
        <div className={style.wrapper}>
            <form onChange={handleChange}>
            <input type="search" placeholder="Search Country"></input>
            <button type="submit" onClick={handleSubmit}>Search</button>
            </form>
        </div>
    )
};

export default SearchBar;