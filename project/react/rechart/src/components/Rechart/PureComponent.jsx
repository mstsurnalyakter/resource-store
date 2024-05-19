import React from "react";
import { LineChart as LChart, Line } from "recharts";

const PureComponent = () => {

    const mathMarksData = [
      { student_id: 1, student_name: "Alice", math_marks: 85 },
      { student_id: 2, student_name: "Bob", math_marks: 78 },
      { student_id: 3, student_name: "Charlie", math_marks: 92 },
      { student_id: 4, student_name: "David", math_marks: 70 },
      { student_id: 5, student_name: "Emma", math_marks: 88 },
      { student_id: 6, student_name: "Frank", math_marks: 65 },
      { student_id: 7, student_name: "Grace", math_marks: 80 },
      { student_id: 8, student_name: "Henry", math_marks: 95 },
      { student_id: 9, student_name: "Ivy", math_marks: 82 },
      { student_id: 10, student_name: "Jack", math_marks: 75 },
    ];


  return (
    <div>
        <LChart width={500} height={400} data={mathMarksData}>
            <Line></Line>
        </LChart>

    </div>
  );
}

export default PureComponent