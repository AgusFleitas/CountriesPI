import style from "./SearchBar.module.css";

const SearchBar = () => {
    return (
        <div className={style.wrapper}>
            <input type="search" placeholder="Search Country"></input>
            <button>Search</button>
        </div>
    )
};

export default SearchBar;