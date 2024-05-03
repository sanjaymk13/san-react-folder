import{Link} from 'react-router-dom'
import "./login.css"
import bg from './assets/sc2.jpg'

function Login(){
    return<>
   <img src={bg} className='img'/>
    <h1 className='loginas'>Login as</h1>
    <Link to="/adminlogin"><button className='bute'>Admin</button></Link>
   <Link to="/teacherlogin"><button className='butr'>Teacher</button></Link>
   <Link to="/studentlogin"><button className='butt'>Student</button></Link>
  
    </>
}export default Login