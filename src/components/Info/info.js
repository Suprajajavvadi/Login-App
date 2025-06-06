import React from "react";
import { IoIosCamera } from "react-icons/io";
import "./info.css"





function NotFound() {
  const name=localStorage.getItem("name")
  const email=localStorage.getItem("email")
  return (
    <div className="main-div-info">
      <div className="inner-div-info">
        <div>
          <div>
             <h3>Account Settings</h3>
          </div>
          <div className="setting-inner-div">
            <div className="user-details">
              <div className="image-div">
                <img className="profile-image" src="https://img.freepik.com/premium-photo/child-boy-character-photo-ai-generated_980993-2472.jpg?w=2000" />
              <div className="cam-icon-div">
                 <IoIosCamera className="cam-icon"/>
                </div> 
             </div>
             <div className="user-name-email">
              <h3>{name}</h3>
              <p>{email}</p>

             </div>
              
            </div>
            <p className="settings-para">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
            
          </div>
         
          
          
        </div>
      </div>

    </div>
  )
}

export default NotFound;
