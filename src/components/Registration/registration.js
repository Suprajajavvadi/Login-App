
import React, { useState } from "react";
import "./registration.css";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      localStorage.setItem("email", formData.email);
      navigate("/Info");
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="first-div">
      <form className="second-div" onSubmit={handleSubmit}>
        <div className="registration-content">
          <h1 className="registration-heading">Signin to your <br /> PopX account</h1>
          <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit</p>

          <div className="email-input-div-registration">
            <label className="email-heading1">Email Address</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email Address"
              className="email-box"
              value={formData.email}
              onChange={handleChange}
            />
           
          </div>
           {errors.email && <span className="error">{errors.email}</span>}

          <div className="email-input-div-registration">
            <label className="email-heading1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="email-box"
              value={formData.password}
              onChange={handleChange}
            />
           
          </div>
           {errors.password && <span className="error">{errors.password}</span>}

          <button type="submit" className="login-button">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
