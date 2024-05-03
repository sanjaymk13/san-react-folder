import oio from"./assets/sc2.jpg"
import "./adminlogin.css"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import adminsData from '.././db.json';

const AdminLogin = () => {
  const [userId, setuserId] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const foundAdmin = adminsData.admins.find(
      admin => admin.user_id === userId && admin.date_of_birth === dateOfBirth
    );

    if (foundAdmin) {
      navigate('/adminpage', { state: { admin: foundAdmin } });
    } else {
      setErrorMessage('No match found');
    }
  };

  return (
    <div>
      <img src={oio} className="limg"/>
      <h2 className="for">Admin Login</h2>
      <label className="user">User Id:</label>
      <input
        type="text"
        placeholder="User Id"
        value={userId}
        onChange={e => setuserId(e.target.value)} className="user1"
      />
      <label className="user2">Date of Birth:</label>
      <input
        type="date"
      
        value={dateOfBirth}
        onChange={e => setDateOfBirth(e.target.value)} className="user3"
      />
      <button onClick={handleLogin} className="user4">Login</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default AdminLogin