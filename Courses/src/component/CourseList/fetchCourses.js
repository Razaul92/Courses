import { useEffect, useState } from "react";
import classes from './CourseList.module.css';
import LoadingSpinner from "../UI/LoadingSpinner";
import { Fragment } from "react";
import Course1Lists from "./courseList1";


const FetchedCourses = (props) => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchCousrses = async () => {
      const response = await fetch(
        "https://mycourses-e6f58-default-rtdb.firebaseio.com/courses.json"
      );

      if (!response.ok) {
        throw new Error("Something went Wrong!!");
      }

      const responseData = await response.json();
      const loadedCourses = [];

      for (const key in responseData) {
        loadedCourses.push({
          id: key,
          heading: responseData[key].heading,
          description: responseData[key].description,
          author: responseData[key].author,
          rating:responseData[key].rating,
          image:responseData[key].image,
          path:responseData[key].path
        });
      }

      setCourses(loadedCourses);
      setIsLoading(false);
    };

    fetchCousrses().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <div className="centered">
          <LoadingSpinner />
        </div>
        <p className={classes.coursesLoading}>Loading....</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.coursesError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const courseList = courses.map((course) => (
    <Course1Lists 
      key={course.id}
      id={course.id}
      heading={course.heading}
      description={course.description}
      author={course.author}
      rating={course.rating}
      image={course.image}
      path={course.path}
    />
  ));

  return (
    <Fragment>
      {courseList}
    </Fragment>
  );
};

export default FetchedCourses ;