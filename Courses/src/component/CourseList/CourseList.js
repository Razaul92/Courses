import classes from './CourseList.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  HashLink as Link,
} from "react-router-hash-link";


const CourseList = () => {
    return(
        <div className={classes.Container}>
            <div className={classes.courseContainer}>  
            <div className={classes.left}>
                <img src="/images/javaScript.png" alt=""/>
            </div>
             <div className={classes.right}>
                 <Link smooth to="/javascript"><h1>The Complete JavaScript Course 2021: From Zero to Expert!</h1></Link> 
                  <p>Modern JavaScript from the beginning - all the way up to JS expert level! </p>
                 <p> <span>Jonas Max</span></p>
                <span className={classes.rating}>3.0</span> 
              <FontAwesomeIcon className={classes.icon} icon="star"/>
              <FontAwesomeIcon className={classes.icon} icon="star"/>
              <FontAwesomeIcon className={classes.icon} icon="star"/>
             </div>
             </div>

            <div className={classes.courseContainer}>
             <div className={classes.left}>
                 <img src="/images/react.jpg" alt=""/>
            </div>
             <div className={classes.right}>
                <Link smooth to='/react'> <h1>React - The Complete Guide (incl Hooks, React Router, Redux)</h1></Link>
                <p>Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!</p>
           <p> <span>Schmedtman Manuel</span></p>
            <span className={classes.rating}>4.0</span> 
              <FontAwesomeIcon className={classes.icon} icon="star"/>
              <FontAwesomeIcon className={classes.icon} icon="star"/>
              <FontAwesomeIcon className={classes.icon} icon="star"/>
              <FontAwesomeIcon className={classes.icon} icon="star"/>
              
             </div>
             </div>

            <div className={classes.courseContainer}> 
                <div className={classes.left}>
                <img src="/images/css.png" alt=""/>
                </div>
             <div className={classes.right}>
                <Link smooth to="/css">  <h1>CSS - The Complete Guide 2021 (incl. Flexbox, Grid & Sass)</h1></Link>
                <p>Learn CSS for the first time or brush up your CSS skills and dive in even deeper.</p>
               <p><span>Schmedtman Manuel</span></p> 
               <span className={classes.rating}>4.0</span> 
               <FontAwesomeIcon className={classes.icon} icon="star"/>
              <FontAwesomeIcon className={classes.icon} icon="star"/>
              <FontAwesomeIcon className={classes.icon} icon="star"/>
              <FontAwesomeIcon className={classes.icon} icon="star"/>
               </div>
            </div>

           

           <div className={classes.courseContainer}>  
            <div className={classes.left}>
               <img src="/images/Agile.jpg" alt=""/>
            </div>
             <div className={classes.right}>
                <Link smooth to="/Agile">  <h1>Agile Fundamentals: Including Scrum and Kanban - 2021</h1></Link>  
                 <p>Master Agile principles, values, approaches, & mindset to help organizations make changes faster and with less expense</p>
                 <p><span>Vikas & Khattri</span></p>
                <span className={classes.rating}>5.0</span> 
                <FontAwesomeIcon className={classes.icon} icon="star"/>
                <FontAwesomeIcon className={classes.icon} icon="star"/>
                <FontAwesomeIcon className={classes.icon} icon="star"/>
                <FontAwesomeIcon className={classes.icon} icon="star"/>
                <FontAwesomeIcon className={classes.icon} icon="star"/>
             </div>
             </div>

             <Link smooth to="/morepage" className={classes.btm}>View More</Link> 
        </div>
    )
}
export default CourseList;