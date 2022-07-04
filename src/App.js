import {Route, Routes, Link } from "react-router-dom";
import './App.css';

   
function App() {
  return (
 
    <div className="App">
      <br />
      <div> <img className="pea-pilt" src="https://modelagency.one/wp-content/uploads/2017/10/frankfurt-germany-model-agency-casting-fashion.jpg" alt="A headshot of a model" /></div>
        <div>
          <h2>Hello, I am Blaa Blaatens and this website is made for Programming or Design to show my portfolio</h2>
        </div>
      <div>
        <hr className="horz-line" />
      </div>
      <br/>

      <div className="kast">
        <Link to="/Courses">
          <div><img src="/XD-user design.png" alt="/XD-user design.png" />
          <p>Work done related to <strong>USER DESIGN</strong></p></div>
          </Link>

        <Link to="/Hobbies">
          <div><img src="/Hobbies-image.jfif" alt="/Hobbies-logo.jfif" />
          <p>Work done related to <strong>HOBBIES</strong></p></div>
          </Link>
        
        <Link to="/Work">
          <div><img src="/PS-image.jfif" alt="/PS-logo.jfif" />
          <p>Work done related to <strong>PHOTOSHOP</strong></p></div>
           </Link>
      </div>

      <Link to="">
        <button>Avaleht</button>
      </Link>

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
