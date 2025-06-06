import React from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./home.css"

function Home() {
const navigate = useNavigate();

 const handleCreate = () => {
   navigate("/Login");
    }
  

  const handleRegister = () => {
   navigate("/Registration");
    }
  


  return(
    <div className="main-div-home">
      <div className="inner-div-home">
        <div className="welcome-page-content">
          <h1 className="welcome-heading">Welcome to PopX</h1>
          <p className="welcome-paragraph">Lorem ipsum dolor sit amet,
            <br/>
            consectetur adipiscing elit</p>
            <button className="create-button" onClick={handleCreate}>Create Account</button>
            <br/>
            <button className="register-button" onClick={handleRegister}>Already Registered?Login</button>

        </div>
        

      </div>

    </div>
  )
}

export default Home;
