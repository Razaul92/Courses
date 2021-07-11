import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Search.module.css";

function SearchBar() {
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    
  };

  const clearInput = () => {
    setWordEntered("");
  };

  const searchIcon = (
    <FontAwesomeIcon className={classes.searchIcon} icon="search" />
  );

  const closeIcon = (
    <FontAwesomeIcon
      className={classes.searchIcon}
      icon="times"
      id="clearBtn"
      onClick={clearInput}
    />
  );

  return (
    <div>
      <div className={classes.searches}>
        <input
          type="text"
          placeholder="Search.."
          value={wordEntered}
          onChange={handleFilter}
        />
        {wordEntered.length === 0 ? searchIcon : closeIcon}
      </div>
     
    </div>
  );
}

export default SearchBar;