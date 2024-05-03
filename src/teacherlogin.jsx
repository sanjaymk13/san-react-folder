import "./teacherlogin.css"
import klk from "./assets/school.jpg"

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import teachersData from '.././db.json';

const TeacherLogin = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const foundTeacher = teachersData.teachers.find(
      teacher => teacher.employee_id === employeeId && teacher.date_of_birth === dateOfBirth
    );

    if (foundTeacher) {
      navigate('/teacherpage', { state: { teacher: foundTeacher } });
    } else {
      setErrorMessage('No match found');
    }
  };

  return (
    <div>
      <img  src={klk} className='llimg'/>
      <h1 className='foor'>Teacher Login</h1>
      <label className="user0">Employee Id</label>
      <input
        type="text"
        placeholder="Employee ID"
        value={employeeId}
        onChange={e => setEmployeeId(e.target.value)} className="user11"
      />
      <label className="user22">Date of Birth</label>
      <input
        type="date"
      
        value={dateOfBirth}
        onChange={e => setDateOfBirth(e.target.value)} className="user33"
      />
      <button onClick={handleLogin} className="user44">Login</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default TeacherLogin