import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const TLineChart = () => {

     const marksData = [
       {
         student_id: 1,
         student_name: "Alice",
         math_marks: 85,
         physics_marks: 78,
         chemistry_marks: 90,
       },
       {
         student_id: 2,
         student_name: "Bob",
         math_marks: 78,
         physics_marks: 82,
         chemistry_marks: 85,
       },
       {
         student_id: 3,
         student_name: "Charlie",
         math_marks: 92,
         physics_marks: 88,
         chemistry_marks: 95,
       },
       {
         student_id: 4,
         student_name: "David",
         math_marks: 70,
         physics_marks: 65,
         chemistry_marks: 72,
       },
       {
         student_id: 5,
         student_name: "Emma",
         math_marks: 88,
         physics_marks: 90,
         chemistry_marks: 87,
       },
       {
         student_id: 6,
         student_name: "Frank",
         math_marks: 65,
         physics_marks: 70,
         chemistry_marks: 68,
       },
       {
         student_id: 7,
         student_name: "Grace",
         math_marks: 80,
         physics_marks: 75,
         chemistry_marks: 82,
       },
       {
         student_id: 8,
         student_name: "Henry",
         math_marks: 95,
         physics_marks: 92,
         chemistry_marks: 98,
       },
       {
         student_id: 9,
         student_name: "Ivy",
         math_marks: 82,
         physics_marks: 85,
         chemistry_marks: 88,
       },
       {
         student_id: 10,
         student_name: "Jack",
         math_marks: 75,
         physics_marks: 78,
         chemistry_marks: 80,
       },
     ];

  return (
    <div>
      <ResponsiveContainer width={700} height={700}>
        <LineChart width={300} height={100} data={marksData}>
          <XAxis dataKey="student_name" />
          <YAxis />
          <Line
            type="monotone"
            dataKey="math_marks"
            stroke="green"
            strokeWidth={2}
          />

          <Line
            type="monotone"
            dataKey="physics_marks"
            stroke="yellow"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="chemistry_marks"
            stroke="red"
            strokeWidth={2}
          />
          <Legend/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TLineChart