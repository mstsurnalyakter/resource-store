// import React from 'react'
// import PropTypes from 'prop-types'
import { LineChart as LChart, Line,XAxis,YAxis } from "recharts";

const LineChart = () => {
    const subjectMarksData = [
      {
        student_id: 1,
        student_name: "John",
        math_marks: 85,
        physics_marks: 78,
        chemistry_marks: 90,
      },
      {
        student_id: 2,
        student_name: "Emily",
        math_marks: 78,
        physics_marks: 82,
        chemistry_marks: 85,
      },
      {
        student_id: 3,
        student_name: "Michael",
        math_marks: 92,
        physics_marks: 88,
        chemistry_marks: 95,
      },
      {
        student_id: 4,
        student_name: "Sophia",
        math_marks: 70,
        physics_marks: 65,
        chemistry_marks: 72,
      },
      {
        student_id: 5,
        student_name: "William",
        math_marks: 88,
        physics_marks: 90,
        chemistry_marks: 87,
      },
      {
        student_id: 6,
        student_name: "Olivia",
        math_marks: 65,
        physics_marks: 70,
        chemistry_marks: 68,
      },
      {
        student_id: 7,
        student_name: "James",
        math_marks: 80,
        physics_marks: 75,
        chemistry_marks: 82,
      },
      {
        student_id: 8,
        student_name: "Isabella",
        math_marks: 95,
        physics_marks: 92,
        chemistry_marks: 98,
      },
      {
        student_id: 9,
        student_name: "Ethan",
        math_marks: 82,
        physics_marks: 85,
        chemistry_marks: 88,
      },
      {
        student_id: 10,
        student_name: "Ava",
        math_marks: 75,
        physics_marks: 78,
        chemistry_marks: 80,
      },
    ];


  return (
    <div>
      <LChart width={800} height={800} data={subjectMarksData}>
        <XAxis dataKey="student_name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math_marks" stroke="red"></Line>
        <Line dataKey={`physics_marks`} stroke="green"></Line>
        <Line dataKey={`chemistry_marks`} stroke="blue"></Line>
      </LChart>
    </div>
  );
}

// LineChart.propTypes = {}

export default LineChart