import React from "react";

const students = [
    {name : "Inje"},
    {name : "Sangmin"},
    {name : "Jungmin"},
    {name : "Sanghyeon"},
]

function AttendanceBook() {
    return (
        <div>
            <h1>출석부</h1>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>{student.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default AttendanceBook;