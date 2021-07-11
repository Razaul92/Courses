import classes from './style.module.css';
import  Header from '../Navigation/Header';
import { Fragment } from 'react';

const Agile = () =>{
    return(
        <Fragment>
            <Header/>
        <div className={classes.detailContainer}>
            <h1>Agile Fundamentals: Including Scrum and Kanban - 2021</h1>
            <h2>What you'll learn</h2>
            <ul>
                <li>Learn how to get into the Agile mindset and achieve success in helping organizations evolve</li>
                <li>Master popular Agile frameworks Scrum, Kanban, and Scrumban, enabling you to land and excel in any Agile position</li>
                <li>Assist with your organization's current, or future, transformation to Agile</li>
                <li>Command a strong focus on delivering customer value and exceeding expectations</li>
                <li>Explore fun, interactive, and highly effective lessons from best-selling instructors</li>
            </ul>
            <h2>Description</h2>
            <p><b>Make yourself a more valuable member of the team by learning how to help organizations make changes faster and with less expense by using Agile approaches.</b></p>
       <p>And with over 70% of companies using Agile for their projects, not knowing the fundamental concepts, principles, and values just isn’t an option anymore.
<p>This course will not only teach you the fundamentals of Agile to help you develop the adaptive mindset, but it will also break down the most popular Agile frameworks such as Scrum, Kanban, and Scrumban.</p>
</p>
 <button className={classes.btn}>Start</button>
        </div>
        </Fragment>
    )
}

export default Agile;