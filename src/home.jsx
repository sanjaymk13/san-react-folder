import './home.css'
import { Link } from 'react-router-dom'
import bg1 from "./assets/sc1.jpg"
import mk from "./assets/mk.jpg"
import bg2 from "./assets/img1.jpeg"
import bg3 from "./assets/img2.jpeg"
import bg4 from "./assets/img3.jpeg"
import bg5 from "./assets/insta.jpg"
import bg6 from "./assets/twit.png"
import bg7 from "./assets/face.jpg"
import u1 from "./assets/s1.jpg"
import u2 from "./assets/s2.jpg"
import u3 from "./assets/s4.jpg"
import u4 from "./assets/s5.jpg"
import u5 from "./assets/s6.jpg"
import j1 from "./assets/o1.jpg"
import j2 from "./assets/op.jpg"
import j3 from "./assets/po.jpg"

function Home() {
    return <>
        <div className='overall'>
            <div className="row1">
                <div><img src={mk} className='mk'/></div>
                <div><p>HOME</p></div>
                <div><p>ABOUT</p></div>
                <div><p>CONTACT US</p></div>
                <div><Link to="login"><button>LOGIN</button></Link></div>

            </div>
            <div>
                <img src={bg1} className='img1' />

                
                <h1 className='text1'>MK higher secondary school</h1>
            </div>
            <div className='row2'>
                <div>
                    <h2 className='about'>About us</h2>
                    <h2 className='t1'>First Choice For Online Education AnywhereTempor erat elitr at rebum at at clita 
                        aliquyam consetetur. </h2> <p className='t2'>Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. 
 Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit,
  sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod,
   dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                </div>
                <div>
                    <img src={bg2} className='img2' />
                  <p>  <img src={bg3} className='img3' /></p>
                    <img src={bg4} className='img4' />
                </div>
            </div>
            <div>
                <h2 className='head'>Why choose our school </h2>
                <div className='c1'>
                <h2 className='oi'>Best Education</h2>
               <p>Grad School is free educational HTML template with Bootstrap CSS layout. 
                Feel free to use it for educational or commercial purposes. 
                Aenean nec metus porttitor, fermentum est accumsan, ultrices augue. 
                Integer dapibus porttitor du</p>
                </div>
                <div className='c2'>
                <h2 className='oi'>Top Management</h2>
                <p>Top Level You can modify this HTML layout by editing contents and adding more pages
                     as you needed. Since this template has options to add dropdown menus, 
                     you can put many HTML pages.Suspendisse tincidunt, magna ut finibus rutrum,
                      libero dolor euismod odio, nec interdum quam felis non ante.</p>
                      </div>
                      <div className='c3'>
                <h2 className='oi'>Quality Meeting</h2>
                <p>Quality Meeting You can use this template to convert into a specific theme for any kind 
                    of CMS platform such as WordPress. For more information, you can contact us now.
                     Sapien tellus vel ipsum. Pellentesque in ipsum ut orci vehicula sagittis et in libero. 
                     Etiam a neque.</p>
                     </div>
            </div>
            <h2 className='achie'>Achievments</h2>
            <div className='lastt'>
                <div className='klk'>
               
                <li>khcckhgdjfgzgfkhg</li>
                <li>jhflugdkhskgfskyskg</li>
                <li>cludluttdytyt</li>
                <li>ljhgljhdkhkgkhfxk</li>
                <li>jhfhgdhgdhdhgdhld</li>
                </div>
                <div>
                    
                    <img src={j2} className='lop2'/>
                    <img src={j3} className='lop3'/>
                    <img src={j1} className='lop1'/>
                </div>
            </div>
            <h2 className='achie'>SPORTS</h2>
            <div className='lat'>
                
                <div className='klk'>
                    <li>Cricket</li>
                    <li>Football</li>
                    <li>Hockey</li>
                    <li>Volleyball</li>
                    <li>Swimming</li>
                </div>
                <div>
                    <img src={u1} className='u1'/>
                    <img src={u2} className='u2'/>
                    <img src={u3} className='u3'/>
                    <img src={u4} className='u4'/>
                    <img src={u5} className='u5'/>
                </div>
            </div>
            <div className='last'>
                <div>
                    <h2 className='add'>Address</h2>
                    <h3>MK HIGHER SECONDARY SCHOOL
                NO 268 KK NAGAR TIRUVALLUR-631210</h3>
                </div>
                <div>
                    <ul><h2 className='add'>Courses offered</h2></ul>
                    <li>MATHS-BIOLOGY</li>
                    <li>MATHS-COMPUTER SCIENCE</li>
                    <li>BIOLOGY</li>
                    <li>ACCOUNTS</li>
                    <li>COMMERSE</li>
                </div>
                <div>
                    <img src={bg5} className='r1'/>
                    <img src={bg6} className='r2'/>
                    <img src={bg7} className='r3'/>
                    
                    <p>1234567890</p>
                </div>
            </div>
        </div>
    </>
} export default Home