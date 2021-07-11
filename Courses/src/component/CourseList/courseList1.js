import classes from './CourseList.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  HashLink as Link,
} from "react-router-hash-link";


const Course1Lists = (props) => {
    return(
        
              <div className={classes.Container}>
            <div className={classes.courseContainer}>  
            <div className={classes.left}>
                <img src={props.image} alt=""/>
            </div>
             <div className={classes.right}>
                 <Link smooth to={props.path}><h1>{props.heading}</h1></Link> 
                  <p>{props.description}</p>
                 <p> <span>{props.author}</span></p>
                <span className={classes.rating}>{props.rating}</span> 
              <FontAwesomeIcon className={classes.icon} icon="star"/>
              <FontAwesomeIcon className={classes.icon} icon="star"/>
              <FontAwesomeIcon className={classes.icon} icon="star"/>
             </div>
             </div>
             </div>
       
             )
             }
export default Course1Lists ;


