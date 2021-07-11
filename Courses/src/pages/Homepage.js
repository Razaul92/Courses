import { Fragment } from "react";
import Header from "../component/Navigation/Header";
import CourseList from '../component/CourseList/CourseList';


const HomePage = () => {
    return(
        <Fragment>
             <Header/>
             <CourseList/>
        </Fragment>
       
    )
}

export default HomePage;