import { Fragment } from "react";
import classes from "./Header.module.css";
import SearchBar from "./SearchBar";
import Hamburger from "./Hamburger";



const Header = (props) => {
  
  
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>MyLearning</h1>
        <SearchBar />
        <Hamburger />
      </header>
    </Fragment>
  );
};

export default Header;