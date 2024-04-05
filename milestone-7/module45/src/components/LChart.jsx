import React from 'react';

import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

const LChart = () => {

const studentMarksData = [
  {
    student_id: 1,
    student_name: "Alice",
    math_marks: 85,
    physics_marks: 78,
    chemistry_marks: 90,
    biology_marks: 82
  },
  {
    student_id: 2,
    student_name: "Bob",
    math_marks: 78,
    physics_marks: 82,
    chemistry_marks: 85,
    biology_marks: 88
  },
  {
    student_id: 3,
    student_name: "Charlie",
    math_marks: 92,
    physics_marks: 88,
    chemistry_marks: 95,
    biology_marks: 90
  },
  {
    student_id: 4,
    student_name: "David",
    math_marks: 70,
    physics_marks: 65,
    chemistry_marks: 72,
    biology_marks: 68
  },
  {
    student_id: 5,
    student_name: "Eve",
    math_marks: 88,
    physics_marks: 90,
    chemistry_marks: 87,
    biology_marks: 85
  },
  {
    student_id: 6,
    student_name: "Frank",
    math_marks: 65,
    physics_marks: 70,
    chemistry_marks: 68,
    biology_marks: 72
  },
  {
    student_id: 7,
    student_name: "Grace",
    math_marks: 80,
    physics_marks: 75,
    chemistry_marks: 82,
    biology_marks: 78
  },
  {
    student_id: 8,
    student_name: "Hannah",
    math_marks: 95,
    physics_marks: 92,
    chemistry_marks: 98,
    biology_marks: 96
  },
  {
    student_id: 9,
    student_name: "Isaac",
    math_marks: 82,
    physics_marks: 85,
    chemistry_marks: 88,
    biology_marks: 84
  },
  {
    student_id: 10,
    student_name: "Julia",
    math_marks: 75,
    physics_marks: 78,
    chemistry_marks: 80,
    biology_marks: 72
  }
];




  return (
    <div className="mb-10">
      <LineChart width={1000} height={500} data={studentMarksData}>
        <XAxis dataKey={"student_name"} />
        <YAxis />
        <Tooltip/>
        <Legend/>
        <Line type="monotone" stroke='red' dataKey={"math_marks"} />
        <Line type="monotone" stroke='green' dataKey={"physics_marks"} />
        <Line type="monotone" stroke='yellow' dataKey={"chemistry_marks"} />
        <Line type="monotone" stroke='purple'  dataKey={"biology_marks"} />
      </LineChart>
    </div>
  );
}

export default LChart;