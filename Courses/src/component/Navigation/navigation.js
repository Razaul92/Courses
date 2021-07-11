import classes from "./navigation.module.css";
import {
  HashLink as Link,
} from "react-router-hash-link";


const Navigation = (props) => {
 

 
  return (
    <nav
      className={`${classes.nav} ${props.open && classes.open}`}
      open={props.open}
    >
      <h2 open={props.open}>MyRestro</h2>
      <ul>
        <li>
          <Link
            smooth
            to="/homePage#header"
            ActiveClassName={`${classes.active}`}
          >
            Home
          </Link>
        </li>
         
          <li>
            <Link smooth to="#header" ActiveclassName={classes.active}>
              About Us
            </Link>
          </li>
        
        <li>
          <Link smooth to="#footer" className={`${classes.active}`}>
            Contact
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navigation;