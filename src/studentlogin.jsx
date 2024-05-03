import imhl from "./assets/sc1.jpg"
import './studentlogin.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import studentsData from '.././db.json';

const StudentLogin = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const foundStudent = studentsData.students.find(
      student => student.roll_number === rollNumber && student.date_of_birth === dateOfBirth
    );

    if (foundStudent) {
      navigate('/studentpage', { state: { student: foundStudent } });
    } else {
      setErrorMessage('No match found');
    }
  };

  return (
    <div>
      <img src={imhl} className="imhl"/>
      <h2 className="userl">Student Login</h2>
      <label className="userm"> Roll Number</label>
      <input
        type="text"
        placeholder="Roll Number"
        value={rollNumber}
        onChange={e => setRollNumber(e.target.value)} className="usern"
      />
      <label className="usero">Date of Birth</label>
      <input
        type="date"
      
        value={dateOfBirth}
        onChange={e => setDateOfBirth(e.target.value)} className="userp"
      />
      <button onClick={handleLogin} className="userq">Login</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default StudentLogin