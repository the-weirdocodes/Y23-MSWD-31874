import logo from './logo.svg';
import './App.css';
import KL_logo from './KL_University_logo.svg.png';
import student from './stu.jpg';
import faculty from './fac.png';
import transport from './trans.jpeg';
import library from './lib.jpg';
import cafeteria from './caf.jpg';
import Footer from './Components/Footer';

const user={
logo:KL_logo
 }
function App() {
  return (
    <div className="App">
      <div class="topborder"></div>
      <div className="logo">
      <img src={user.logo} alt="KL_logo" style={{width: '290px', height: '120px' }}/></div>
     <h1>Koneru Lakshmaiah Education Foundation</h1><h4>(Deemed to be University)</h4> 
      <h3>Vaddeswaram, Guntur</h3>
      <div className="semi-transparent-box">
      <span style={{fontWeight:'bold',color: 'black', fontSize: 30 }}>Y24 registrations are open !</span>
      <div className="buttonContainer">
        <button>Register here</button></div></div>
      <div className="ImageContainerWrapper">
      <div className= "ImageContainer"> 
        <div className="ImageItem">
        <img src="stu.jpg" alt="student"className='hover-image'></img> 
        <h5>Student</h5> </div>
        <div className="ImageItem">
        <img src="fac.png" alt="faculty" style={{width: '200px', height: '120px' }} className='hover-image'></img>
        <h5>Faculty</h5></div>
        <div className="ImageItem">
        <img src="lib.jpg" alt="library" className='hover-image'></img>
        <h5>Library</h5></div>
        <div className="ImageItem">
        <img src="trans.jpeg" alt="transport" style={{width: '200px', height: '120px' }}className='hover-image'></img>
        <h5>Transport</h5></div>
        <div className="ImageItem">
        <img src="caf.jpg" alt="cafeteria" className='hover-image'></img>  
        <h5>Cafeteria</h5>      
      </div>
     </div>
     <Footer/>
    </div>
     </div>
  ); 
}
export default App;
