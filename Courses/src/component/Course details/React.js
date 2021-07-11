import classes from './style.module.css';
import  Header from '../Navigation/Header';
import { Fragment } from 'react';

const ReactJs = () =>{
    return(
        <Fragment>
            <Header/>
       <div className={classes.detailContainer}>
            <h1>React - The Complete Guide (incl Hooks, React Router, Redux)</h1>
            <h2>What you'll learn</h2>
            <ul>
                <li>Build powerful, fast, user-friendly and reactive web apps</li>
                 <li>Apply for high-paid jobs or work as a freelancer in one the most-demanded sectors you can find in web dev right now</li>
                  <li>Provide amazing user experiences by leveraging the power of JavaScript with ease</li>
                   <li>Learn all about React Hooks and React Components</li>
            </ul>
            <h2>Description</h2>
            <p><b>This course is the most up-to-date, comprehensive and bestselling React course</b></p>
            <p>React.js is THE most popular JavaScript library you can use and learn these days to build modern, reactive user interfaces for the web.</p>
            <p>This course teaches you React in-depth, from the ground up, step by step by diving into all the core basics, exploring tons of examples and also introducing you to advanced concepts as well.</p>
            <p>You'll get all the theory, tons of examples and demos, assignments and exercises and tons of important knowledge that is skipped by most other resources - after all, there is a reason why this course is that huge! :)</p>
            <p>And in case you don't even know why you would want to learn React and you're just here because of some ad or "the algorithm" - no worries: ReactJS is a key technology as a web developer and in this course I will also explain WHY it's that important!</p>
            <button className={classes.btn}>Start</button>
        </div>
        </Fragment>
    )
}

export default ReactJs;