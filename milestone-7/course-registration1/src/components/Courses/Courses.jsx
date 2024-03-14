import PropTypes from 'prop-types'
import Course from './Course'
import { useEffect, useState } from "react"

const Courses = ({ handleCourseSelect }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const res = await fetch("courses.json");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadCourses();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:col-span-3">
      {courses.map((course) => (
        <Course
          handleCourseSelect={handleCourseSelect}
          course={course}
          key={course.id}
        />
      ))}
    </div>
  );
};

Courses.propTypes = {
  handleCourseSelect: PropTypes.func.isRequired
};

export default Courses