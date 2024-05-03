

import React from 'react';
import { useLocation } from 'react-router-dom';
import "./studentpage.css"

const StudentPage = () => {
  const location = useLocation();
  const { student } = location.state;

  return (
    <div>
      <h2>Welcome, {student.name}</h2>
      <div className='ert'>
      
      <p>Roll number: {student.roll_number}</p>
      <p>Date of Birth: {student.date_of_birth}</p>
      <p>Gender: {student.gender}</p>
      <p>Blood Group: {student.blood_group}</p>
      <p>Address: {student.address}</p>
      <p>Class: {student.class}</p>
      <p>Section: {student.section}</p>
      <p>Father Name: {student.father_name}</p>
      <p>Mother Name: {student.mother_name}</p>
      <p>Father Phone Number: {student.father_phonenumber}</p>
      <p>Father Occupation: {student.father_occupation}</p>
      </div>

    </div>
  );
};

export default StudentPage;






