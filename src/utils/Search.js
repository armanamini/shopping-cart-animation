import React from "react";
import { useState } from "react";
import styles from './CartButton.module.css';
import SearchIcon from '../SVG/SearchIcon'
import CloseIcon from '../SVG/CloseIcon'
const Search = ({ placeholder, data }) => {
  const [search, setSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    const doSearch = data.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    if (value === "") {
      setSearch([]);
    } else {
      setSearch(doSearch);
    }
    
  }
  const handleColse = () => {
    setSearch([]);
    setSearchValue("");
  };

  return (
    <div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={handleSearch}
        />
        {search.length > 0 ? <div style={{cursor:'pointer'}} onClick={handleColse}><CloseIcon /></div> : <SearchIcon/>}
      </div>
      {search.length > 0 && (
        <div className={styles.searchResult}>
          {search.map((value, key) => {
            return (
              <div>
                <p>{value.title}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
