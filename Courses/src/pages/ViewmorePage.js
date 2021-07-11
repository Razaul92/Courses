import { Fragment } from "react";
import Header from "../component/Navigation/Header";
import FetchedCourses from "../component/CourseList/fetchCourses";


const HomePage = () => {
    return(
        <Fragment>
             <Header/>
             <FetchedCourses/>
        </Fragment>
       
    )
}

export default HomePage;