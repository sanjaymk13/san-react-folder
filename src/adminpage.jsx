import "./adminpage.css"
import React, { useState } from 'react';
import studentsData from '.././db.json';
import { useLocation } from 'react-router-dom';
import { Button } from 'primereact/button';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import teachersData from '.././db.json';

const AdminPage = () => {
  const location = useLocation();
  const { admin } = location.state;

  
  
    const [leaveRequests, setLeaveRequests] = useState([]);
    const [reply, setReply] = useState('');
  
    const handleLeaveReply = (request) => {
      // Handle leave reply logic (e.g., using API call)
      console.log('Leave reply sent to teacher:', reply);
      // Clear reply after sending
      setReply('');
    };

  
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [editedTeacher, setEditedTeacher] = useState({});

  const viewTeacher = (rowData) => {
    setSelectedTeacher(rowData);
  };

  const editTeacher = (rowData) => {
    setEditedTeacher({ ...rowData });
  };

 
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setEditedTeacher({ ...editedTeacher, [name]: value });
  // };

  const handleInputChange = (e)=>{
    
  }

  const saveChanges = () => {
    // Update the teacher data in db.json
    // const updatedTeachers = teachersData.teachers.map((teacher) =>
    //   teacher.employee_id === editedTeacher.employee_id ? editedTeacher : teacher
    // );
    axios.put('http://localhost:3000/teachers',editedTeacher)
    .then((res)=>{
      alert('Done')
    })
    // Here, you should save the updatedTeachers array to your database or file (e.g., using fetch or Axios)
    console.log("Updated Teachers:", updatedTeachers);
    setEditedTeacher(null);
  };

  const actionTemplate = (rowData) => {
    return (
      <div>
        <Button label="View" icon="pi pi-eye" className="p-button-rounded p-button-success" style={{ backgroundColor: 'red', color: 'black' }} onClick={() => viewTeacher(rowData)} />
        <Button label="Edit" icon="pi pi-pencil" className="p-button-rounded p-button-warning" style={{ backgroundColor: 'red', color: 'black' }} onClick={() => editTeacher(rowData)} />
        <Button label="Delete" icon="pi pi-trash" className="p-button-rounded p-button-danger" style={{ backgroundColor: 'red', color: 'black' }} onClick={() => deleteTeacher(rowData)} />
      </div>
    );
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
    <div className="wh">
    <div>
      <h2>Welcome, {admin.name}</h2>
      <div className="h1">
      <p>User Id: {admin.user_id}</p>
      <p>Date of Birth: {admin.date_of_birth}</p>
      <p>Gender: {admin.gender}</p>
      <p>Address: {admin.address}</p>
      
      <p>Phone Number: {admin.phone_number}</p>
      <p>Email: {admin.email}</p>
      </div>
 
    </div>
    <div>
    <a href = "./addteacher"><button className='adb'>ADD TEACHER</button></a>
       <a href="./addstudent"><button className='ads'>ADD STUDENT</button></a>
    </div>

   

    <div>
      
      <div>
        <h2>Leave Requests:</h2>
        <ul>
          {leaveRequests.map((request, index) => (
            <li key={index}>
              <p>Teacher: {request.teacherName}, Employee ID: {request.teacherId}</p>
              <p>Leave Request: {request.leaveRequest}</p>
              <input
                type="text"
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder="Enter reply"
              />
              <button onClick={() => handleLeaveReply(request)}>Approve</button>
              <button onClick={() => handleLeaveReply(request)}>Reject</button>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div>
      
      <h2>Teacher Details</h2>
      <DataTable value={teachersData.teachers}>
        <Column field="employee_id" header="Employee ID" />
        <Column field="name" header="Name" />
        <Column field="date_of_birth" header="Date of Birth" />
        <Column field="gender" header="Gender" />
        <Column body={actionTemplate} header="Actions" />
      </DataTable>
      {selectedTeacher && (
        <div className="taskbar">
          <h3>View Teacher Details:</h3>
          <p>Employee ID: {selectedTeacher.employee_id}</p>
          <p>Name: {selectedTeacher.name}</p>
          <p>Date of Birth: {selectedTeacher.date_of_birth}</p>
          <p>Gender: {selectedTeacher.gender}</p>
          <p>Address: {selectedTeacher.address}</p>
          <p>Core Subject: {selectedTeacher.core_subject}</p>
          <p>Phone Number : {selectedTeacher.phone_number}</p>
          <p>Email: {selectedTeacher.email}</p>
          <p> Qualification: {selectedTeacher.qualification}</p>
          <p>Marital Statua: {selectedTeacher.marital_status}</p>
         
        </div>
      )}
      {editedTeacher && (
        <div className="taskbar">
          <h3>Edit Teacher Details:</h3>
          <label>Employee ID:</label>
          <input type="text" name="employee_id" value={editedTeacher.employee_id} onChange={handleInputChange} />
          <br/>
          <label>Name:</label>
          <input type="text" name="name" value={editedTeacher.name} onChange={handleInputChange} />
          <br/>
          <label>Date of Birth:</label>
          <input type="text" name="date_of_birth" value={editedTeacher.date_of_birth} onChange={handleInputChange} />
          <br/>
          
         
          <label>Address:</label>
          <input type="text" name="address" value={editedTeacher.address} onChange={handleInputChange} />
        
        <br/>
        <label>Phone Number:</label>
          <input type="number" name="phonenumber" value={editedTeacher.phone_number} onChange={handleInputChange} />
          <br/>
          <label>Email:</label>
          <input type="email" name="gender" value={editedTeacher.email} onChange={handleInputChange} />
          <br/>
          <label>Qualification:</label>
          <input type="text" name="qualification" value={editedTeacher.qualification} onChange={handleInputChange} />
          <br/>
          <label>Marital Status:</label>
          <input type="text" name="maritalstatus" value={editedTeacher.marital_status} onChange={handleInputChange} />
          <Button label="Save" onClick={saveChanges} />
        </div>
      )}
    </div>









   
    <div>
      <h2 className="search">Search Student</h2>
      <div>
        <input type="text" placeholder="Search by roll number, name, or date of birth" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="rtr">
        {searchMessage && <p>{searchMessage}</p>}
        {searchResults.length > 0 && (
          <div>
            <h2>Search Results:</h2>
            <ul>
              {searchResults.map((student, index) => (
                <label key={index}>
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
                </label>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>

    

    </div>
    </>
  );
};

export default AdminPage;