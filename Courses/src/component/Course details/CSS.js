import classes from './style.module.css';
import  Header from '../Navigation/Header';
import { Fragment } from 'react';

const CSS = () =>{
    return(
        <Fragment>
            <Header />
        <div className={classes.detailContainer}>
            <h1>CSS - The Complete Guide 2021 (incl. Flexbox, Grid & Sass)</h1>
            <h2>What you'll learn
</h2>
<ul>
    <li>Build beautiful websites which don't just contain great content but also look good</li>
    <li>Understand the concepts and theory behind CSS and certain CSS features</li>
    <li>Use basic as well as advanced CSS features</li>
</ul>

<h2>Description</h2>
<p>CSS - short for Cascading Style Sheets - is a "programming language" you use to turn your raw HTML pages into real beautiful websites.</p>
<p>This course covers it all - we start at the very basics (What is CSS? How does it work? How do you use it)? and gradually dive in deeper and deeper. And we do this by showing both practical examples as well as the theory behind it.

</p>
<p>Of course this course offers the theory and practical examples - we'll build an entire real course project throughout the course - but there also are multiple assignments, quizzes and challenges for you to practice individual concepts taught throughout the course.</p>
       <button className={classes.btn}>Start</button>
        </div>
        </Fragment>
    )
}

export default CSS;