// import React, { useState } from 'react';
// import studentsData from '.././db.json';

// const StudentAttendance = ({ date, onSave }) => {
//   const [attendance, setAttendance] = useState(studentsData.students.map(student => ({
//     roll_number: student.roll_number,
//     name: student.name,
//     present: false,
//     absent: false
//   })));

//   const handleCheckboxChange = (index, type) => {
//     const updatedAttendance = [...attendance];
//     if (type === 'present') {
//       updatedAttendance[index].present = !updatedAttendance[index].present;
//       updatedAttendance[index].absent = false;
//     } else {
//       updatedAttendance[index].absent = !updatedAttendance[index].absent;
//       updatedAttendance[index].present = false;
//     }
//     setAttendance(updatedAttendance);
//   };

//   const handleSave = () => {
//     onSave(date, attendance);
//   };

//   const presentCount = attendance.filter(student => student.present).length;
//   const absentCount = attendance.filter(student => student.absent).length;

//   return (
//     <div>
//       <h1>Student Attendance - {date}</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Roll Number</th>
//             <th>Name</th>
//             <th>Present</th>
//             <th>Absent</th>
//           </tr>
//         </thead>
//         <tbody>
//           {attendance.map((student, index) => (
//             <tr key={index}>
//               <td>{student.roll_number}</td>
//               <td>{student.name}</td>
//               <td><input type="checkbox" checked={student.present} onChange={() => handleCheckboxChange(index, 'present')} /></td>
//               <td><input type="checkbox" checked={student.absent} onChange={() => handleCheckboxChange(index, 'absent')} /></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div>
//         <p>Number of Present: {presentCount}</p>
//         <p>Number of Absent: {absentCount}</p>
//       </div>
//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// };

// export default StudentAttendance

// import React, { useState } from 'react';
// import studentsData from '.././db.json';

// const StudentAttendance = () => {
//   const [attendance, setAttendance] = useState({});
//   const daysInMonth = new Date(2024, 3, 0).getDate(); // Get number of days in April 2024

//   const handleCheckboxChange = (rollNumber, day, type) => {
//     const updatedAttendance = { ...attendance };
//     if (!updatedAttendance[day]) {
//       updatedAttendance[day] = {};
//     }
//     if (!updatedAttendance[day][rollNumber]) {
//       updatedAttendance[day][rollNumber] = {};
//     }
//     updatedAttendance[day][rollNumber][type] = !updatedAttendance[day][rollNumber][type];
//     setAttendance(updatedAttendance);
//   };

//   const handleSave = () => {
//     // Save attendance data here (e.g., to database)
//     console.log("Attendance saved:", attendance);
//   };

//   return (
//     <div>
//       <h1>Student Attendance - April 2024</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Roll Number</th>
//             <th>Name</th>
//             {[...Array(daysInMonth)].map((_, index) => (
//               <th key={index}>{index + 1}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {studentsData.students.map((student, index) => (
//             <tr key={index}>
//               <td>{student.roll_number}</td>
//               <td>{student.name}</td>
//               {[...Array(daysInMonth)].map((_, index) => {
//                 const day = index + 1;
//                 const weekday = new Date(2024, 3, day).toLocaleDateString('en-US', { weekday: 'long' });
//                 return (
//                   <td key={index}>
//                     {weekday === 'Sunday' ? (
//                       <span>Sunday - Holiday</span>
//                     ) : (
//                       <>
//                         <input type="checkbox" onChange={() => handleCheckboxChange(student.roll_number, day, 'present')} />
//                         <label>Present</label>
//                         <input type="checkbox" onChange={() => handleCheckboxChange(student.roll_number, day, 'absent')} />
//                         <label>Absent</label>
//                       </>
//                     )}
//                   </td>
//                 );
//               })}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// };

// export default StudentAttendance

import React, { useState } from 'react';
import studentsData from '.././db.json';

const StudentAttendance = () => {
  const [attendance, setAttendance] = useState({});
  const [presentCount, setPresentCount] = useState(0);
  const [absentCount, setAbsentCount] = useState(0);
  const daysInMonth = new Date(2024, 3, 0).getDate(); // April 2024

  const handleCheckboxChange = (rollNumber, day, type) => {
    const updatedAttendance = { ...attendance };
    if (!updatedAttendance[day]) {
      updatedAttendance[day] = {};
    }

    // Check if the opposite type is already checked, if yes, uncheck it
    if (updatedAttendance[day][rollNumber] && updatedAttendance[day][rollNumber][type === 'present' ? 'absent' : 'present']) {
      updatedAttendance[day][rollNumber][type === 'present' ? 'absent' : 'present'] = false;
      type === 'present' ? setAbsentCount(prevCount => prevCount - 1) : setPresentCount(prevCount => prevCount - 1);
    }

    if (!updatedAttendance[day][rollNumber]) {
      updatedAttendance[day][rollNumber] = {};
    }
    updatedAttendance[day][rollNumber][type] = !updatedAttendance[day][rollNumber][type];

    if (type === 'present') {
      setPresentCount(prevCount => prevCount + 1);
    } else {
      setAbsentCount(prevCount => prevCount + 1);
    }

    setAttendance(updatedAttendance);
  };

  const handleSave = () => {
    // Save attendance data here (e.g., to database)
    console.log("Attendance saved:", attendance);
  };

  return (
    <div>
      <h1>Student Attendance - April 2024</h1>
      <table>
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            {[...Array(daysInMonth)].map((_, index) => (
              <th key={index}>{index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {studentsData.students.map((student, index) => (
            <tr key={index}>
              <td>{student.roll_number}</td>
              <td>{student.name}</td>
              {[...Array(daysInMonth)].map((_, index) => {
                const day = index + 1;
                const weekday = new Date(2024, 3, day).toLocaleDateString('en-US', { weekday: 'long' });
                return (
                  <td key={index}>
                    {weekday === 'Sunday' ? (
                      <span>Sunday - Holiday</span>
                    ) : (
                      <>
                        <input type="checkbox" checked={attendance[day]?.[student.roll_number]?.present} onChange={() => handleCheckboxChange(student.roll_number, day, 'present')} />
                        <label>Present</label>
                        <input type="checkbox" checked={attendance[day]?.[student.roll_number]?.absent} onChange={() => handleCheckboxChange(student.roll_number, day, 'absent')} />
                        <label>Absent</label>
                      </>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>No of Present: {presentCount}</p>
        <p>No of Absent: {absentCount}</p>
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default StudentAttendance