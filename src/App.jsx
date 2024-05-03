


import Home from "./home"
import Login from "./login"
import Teacherlogin from "./teacherlogin"
import Teacherpage from "./teacherpage"
import StudentLogin from "./studentlogin"
import StudentPage from "./studentpage"
import AdminLogin from "./adminlogin"
import AdminPage from "./adminpage"
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import AddTeacher from "./addteacher"
import AddStudent from "./addstudent"
import StudentAttendance from "./StudentAttend"







function App() {
 
  return (
    <>
    <BrowserRouter>

    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/login" element={<Login/>}/>

     <Route path="/teacherlogin" element={<Teacherlogin/>}/>
     <Route path="/teacherpage" element={<Teacherpage/>}/>
     <Route path="/studentlogin" element={<StudentLogin/>}/>
     <Route path="/studentpage" element={<StudentPage/>}/>
     <Route path="/adminlogin" element={<AdminLogin/>}/>
     <Route path="/adminpage" element={<AdminPage/>}/>
     <Route path="/addteacher" element={<AddTeacher/>}/>
     <Route path="/addstudent" element={<AddStudent/>}/>
     <Route path="/StudentAttend" element={<StudentAttendance/>}/>
    
  
   
     
    </Routes>
    
    </BrowserRouter>
    
    </>
     )
}

export default App
