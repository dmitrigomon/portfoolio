import {Route, Routes, Link } from "react-router-dom";
import './App.css';
im
   
function App() {
  return (
 
    <div className="App">
      <br />
      <div> <img className="pea-pilt" src="https://modelagency.one/wp-content/uploads/2017/10/frankfurt-germany-model-agency-casting-fashion.jpg" alt="A headshot of a model" /></div>
        <div>
          <h2>Hello, I am Blaa Blaatens and this website is made for Programming or Design to show my portfolio</h2>
        </div>
      <div>
        <p className="horz-line">________</p>
      </div>
      <br/>

      <div className="kast">
        <Link to="/Courses">
          <img className="small-images" src="/XD-user design.png" alt="/XD-user design.png" />
          <p>Work done related to <strong>USER DESIGN</strong></p>
          </Link>

        <Link to="/Hobbies">
          <img className="small-images" src="/Hobbies-image.jfif" alt="/Hobbies-logo.jfif" />
        
          <p>Work done related to <strong>HOBBIES</strong></p>
          </Link>
        
        <Link to="/Work">
          <img className="small-images" src="/PS-image.jfif" alt="/PS-logo.jfif" />
       
          <p>Work done related to <strong>PHOTOSHOP</strong></p>
           </Link>
      </div>

      <Link to="">
        <button>Avaleht</button>
      </Link>

      {/* <Link to="/Courses">
        <button>Courses</button>
      </Link>

      <Link to="/Hobbies">
        <button>Hobbies</button>
      </Link>

      <Link to="/Work">
        <button>Work</button>
      </Link> */}


      <Routes>
        <Route path=""       element={<div>Avaleht</div>}/>
        <Route path="Courses" element={<div>Courses</div>} />
        <Route path="Hobbies" element={<div>Hobbies</div>} />
        <Route path="Work" element={<div>Work</div>} />
      </Routes>
            
      </div>
  
  );
}
     

export default App;
