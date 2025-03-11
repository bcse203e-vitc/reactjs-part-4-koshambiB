import React, { useState } from 'react';
import './StudentList.css'; // Import the CSS file

const StudentList = ({ students, onViewDetails, onAddStudent }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    onViewDetails(student);
  };

  return (
    <div className="student-list">
      <h1>Student List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>
              <td>
                <button onClick={() => handleViewDetails(student)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedStudent && (
        <div className="student-details">
          <h2>Details for {selectedStudent.name}</h2>
          <p><strong>Email:</strong> {selectedStudent.email}</p>
          <p><strong>Phone:</strong> {selectedStudent.phone}</p>
          <p><strong>Address:</strong> {selectedStudent.address}</p>
        </div>
      )}
      <button className='addNew' onClick={onAddStudent}>Add New Student</button>
    </div>
  );
}

export default StudentList;