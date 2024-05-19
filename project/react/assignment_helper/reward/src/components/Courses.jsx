import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Course from './Course';

const Courses = ({ handleAddToCart }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCoursesData = async () => {
      const res = await fetch("courses.json");
      if (!res.ok) {
        throw new Error("Failed to fetch courses data");
      }

      const data = await res.json();
      setCourses(data);
    };
    fetchCoursesData();
  }, []);

  return (
    <div className="lg:col-span-3">
      <h2>Courses</h2>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Course
            handleAddToCart={handleAddToCart}
            key={course.id}
            course={course}
          />
        ))}
      </section>
    </div>
  );
};

Courses.propTypes = {
  handleAddToCart:PropTypes.func.isRequired
};

export default Courses