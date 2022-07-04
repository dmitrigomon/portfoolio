import { Link } from "react-router-dom";

function Courses() {
  return ( 
    <div>
      <div>Courses</div>  
      <Link to="/">
        <button>BACK</button>
      </Link> 
    </div>
   );
}

export default Courses;