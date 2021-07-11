import classes from './style.module.css';
import  Header from '../Navigation/Header';
import { Fragment } from 'react';

const Selenium = () =>{
    return(
        <Fragment>
            <Header />
        <div className={classes.detailContainer}>
            <h1>Selenium WebDriver with Java -Basics to Advanced+Frameworks</h1>
            <h2>What you'll learn
</h2>
<ul>
    <li>*****By the end of this course,You will be Mastered on Selenium Webdriver with strong Core JAVA basics</li>
    <li>*** InDepth understanding of real time Selenium CHALLENGES with 100 + examples  </li>
    <li>*We have 5 dedicated TRAINERS who can help in answering students queries along with resume,Interview preparation with Job assistance</li>
   <li>****You will gain the ability to design PAGEOBJECT, DATADRIVEN&HYBRID Automation FRAMEWORKS from scratch</li>
   <li>*Complete knowledge on TestNG, MAVEN,ANT, JENKINS,LOG4J, CUCUMBER, HTML REPORTS,EXCEL API, GRID PARALLEL TESTING</li>
</ul>

<h2>Description</h2>
<p>This course covers Java Basics core + Selenium Webdriver + Advanced Selenium + Interview Preparation + Framework design ( TestNG, ANT, Pageobject, Maven, Jenkins, Excel Datadriven, Cucumber, log4j ) + Selenium Grid + DataBase Testing + Performance Testing on Selenium scripts + Mobile testing Basics + Resume Preparation including       " Life Time Support (On Demand skype sessions) + Material + Job Assistance- (US, India, Canada</p>
<p>On course completion You will be Mastered in Selenium Automation Testing and implementing Successfully in your work place or you will land on High Paying Job 

</p>
<p>Of course this course offers the theory and practical examples - we'll build an entire real course project throughout the course - but there also are multiple assignments, quizzes and challenges for you to practice individual concepts taught throughout the course.</p>
       <button className={classes.btn}>Start</button>
        </div>
        </Fragment>
    )
}

export default Selenium;