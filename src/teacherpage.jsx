
import React, { useState } from 'react';
import studentsData from '.././db.json';
import { useLocation } from 'react-router-dom';
import "./teacherpage.css"

const TeacherPage = () => {
  const location = useLocation();
  const { teacher } = location.state;

  
  const [leaveRequest, setLeaveRequest] = useState('');
  const [adminName, setAdminName] = useState('');
  const [adminId, setAdminId] = useState('');
  const [replyFromAdmin, setReplyFromAdmin] = useState('');

  const sendLeaveRequest = () => {
    // Send leave request logic (e.g., using API call)
    console.log('Leave request sent to admin:', {
      leaveRequest,
      adminName,
      adminId
    });
    // Clear leave request after sending
    setLeaveRequest('');
    setAdminName('');
    setAdminId('');
  };

  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchMessage, setSearchMessage] = useState('');

  const handleSearch = () => {
    // Reset search message
    setSearchMessage('');

    // Check if search input is empty
    if (!searchInput.trim()) {
      setSearchResults([]);
      setSearchMessage('Please enter a search query.');
      return;
    }

    // Search for matching students
    const results = studentsData.students.filter(student => {
      return (
        student.roll_number.includes(searchInput) ||
        student.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        student.date_of_birth.includes(searchInput)
      );
    });

    if (results.length === 0) {
      setSearchResults([]);
      setSearchMessage('No match found.');
    } else {
      setSearchResults(results);
    }
  };

  return (
    <>
    <div>
      <h2>Welcome, {teacher.name}</h2>
      <div className='dfg'>
      <p>Employee ID: {teacher.employee_id}</p>
      <p>Date of Birth: {teacher.date_of_birth}</p>
      <p>Gender: {teacher.gender}</p>
      <p>Address: {teacher.address}</p>
      <p>Core Subject: {teacher.core_subject}</p>
      <p>Phone Number: {teacher.phone_number}</p>
      <p>Email: {teacher.email}</p>
      <p>Qualification: {teacher.qualification}</p>
      <p>Marital Status: {teacher.marital_status}</p>
      </div>
    </div>
    <div>
      <a href="./StudentAttend"><button>Attendance</button></a>
    </div>

    <div>
      <h2>Search Student</h2>
      <div>
        <input type="text" placeholder="Search by roll number, name, or date of birth" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {searchMessage && <p>{searchMessage}</p>}
        {searchResults.length > 0 && (
          <div>
            <h2>Search Results:</h2>
            <ul>
              {searchResults.map((student, index) => (
                <li key={index}>
                  <p>Roll Number: {student.roll_number}</p>
                  <p>Name: {student.name}</p>
                  <p>Date of Birth: {student.date_of_birth}</p>
                  <p>Class:{student.class}</p>
                  <p>Section:{student.section}</p>
                  <p>Blood Group:{student.blood_group}</p>
                  <p>Father Name:{student.father_name}</p>
                  <p>Mother Name:{student.mother_name}</p>
                  <p>Father occupation:{student.father_occupation}</p>
                  <p>Address:{student.address}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
     
      <div>
        <h2>Leave Request:</h2>
        <input
          type="text"
          value={leaveRequest}
          onChange={(e) => setLeaveRequest(e.target.value)}
          placeholder="Enter leave request"
        />
        <input
          type="text"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
          placeholder="Enter admin's name"
        />
        <input
          type="text"
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
          placeholder="Enter admin's ID"
        />
        <button onClick={sendLeaveRequest}>Send</button>
      </div>
      <div>
        <h2>Reply from Admin:</h2>
        <p>{replyFromAdmin}</p>
      </div>
    </div>
    
    </div>
    </>
  );
};

export default TeacherPage;





