import React from 'react';

const StudentDetails = ({ student, onBack }) => {
  if (!student) return null;

  return (
    <div>
      <h1>Student Details</h1>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
      <p>Email: {student.email || 'N/A'}</p>
      <p>Phone: {student.phone || 'N/A'}</p>
      <p>Address: {student.address || 'N/A'}</p>
      <button onClick={onBack}>Back to List</button>
    </div>
  );
}

export default StudentDetails;