import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Koshambi Bardhan', age: 20, grade: 'A' , email:'hihi@gmail.com'},
    { id: 2, name: 'Amal M raju', age: 22, grade: 'B', email:'hihi@gmail.com' },
    {id: 3, name: 'Bhargavi Deshmukh', age: 22, grade: 'B' , email:'hihi@gmail.com'},
    {id: 4, name: 'Alaina Bardhan ', age: 18, grade: 'A', email:'hihi@gmail.com'},
    {id: 5, name: 'Aayush Shukla', age: 22, grade: 'D', email:'hihi@gmail.com' },
  ]);
  const [view, setView] = useState('list'); // 'list', 'form', 'details'
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleAddStudent = (student) => {
    setStudents([...students, student]);
    setView('list');
  };

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    setView('details');
  };

  const handleBackToList = () => {
    setView('list');
  };

  return (
    <div className="App">
      {view === 'list' && <StudentList students={students} onViewDetails={handleViewDetails} onAddStudent={() => setView('form')} />}
      {view === 'form' && <StudentForm onAddStudent={handleAddStudent} onCancel={handleBackToList} />}
      {view === 'details' && <StudentDetails student={selectedStudent} onBack={handleBackToList} />}
    </div>
  );
};

export default App;