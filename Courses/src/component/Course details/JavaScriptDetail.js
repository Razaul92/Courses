import { Fragment } from 'react';
import classes from './style.module.css';
import  Header from '../Navigation/Header';

const JavaScript = () =>{
    return(
        <Fragment>
            < Header/>
        <div className={classes.detailContainer}>
            <h1>The Complete JavaScript Course 2021: From Zero to Expert!</h1>
            <h2>What you'll learn</h2>
            <ul>
                <li>Become an advanced, confident, and modern JavaScript developer from scratch</li>
                <li>Become job-ready by understanding how JavaScript really works behind the scenes</li>
                <li>JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings, etc.</li>
                <li>Modern OOP: Classes, constructors, prototypal inheritance, encapsulation, etc.</li>
                <li>Asynchronous JavaScript: Event loop, promises, async/await, AJAX calls and APIs</li>
                <li>Build 6 beautiful real-world projects for your portfolio (not boring toy apps)</li>
                <li>How to think and work like a developer: problem-solving, researching, workflows</li>
            </ul>
             <h2>Description</h2>
             <p>JavaScript is the most popular programming language in the world. It powers the entire modern web. It provides millions of high-paying jobs all over the world.
             </p>
             <p><b>Why is this the right JavaScript course for you?</b></p>
             <p>This is the most complete JavaScript course on Udemy. It's an all-in-one package that will take you from the very fundamentals of JavaScript, all the way to building modern and complex applications.</p>
             <p>You will learn modern JavaScript from the very beginning, step-by-step. I will guide you through practical and fun code examples, important theory about how JavaScript works behind the scenes, and beautiful and complete projects.</p>
             <button className={classes.btn}>Start</button>
        </div>
        </Fragment>
    )
}

export default JavaScript;