

import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required.";
    if (!formData.phone.match(/^[6-9]\d{9}$/)) newErrors.phone = "Enter a valid 10-digit phone number.";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Enter a valid email address.";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    if (!formData.company.trim()) newErrors.company = "Company name is required.";
    if (!formData.agency) newErrors.agency = "Please select if you are an agency.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      localStorage.setItem("name", formData.fullname);
      localStorage.setItem("email", formData.email);
      navigate("/Registration");
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="login-main-div">
      <form className="login-inner-div" onSubmit={handleSubmit}>
        <div className="signin-content">
          <h1 className="account-heading">Create your <br /> PopX account</h1>

          <div className="email-input-div">
            <label className="email-heading">Full Name <span className="name">*</span></label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter your name"
              className="email-box"
              value={formData.fullname}
              onChange={handleChange}
            />
            
          </div>
          {errors.fullname && <span className="error">{errors.fullname}</span>}

          <div className="email-input-div">
            <label className="email-heading">Phone number <span className="name">*</span></label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              className="email-box"
              value={formData.phone}
              onChange={handleChange}
            />
            
          </div>
          {errors.phone && <span className="error">{errors.phone}</span>}

          <div className="email-input-div">
            <label className="email-heading">Email address <span className="name">*</span></label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="email-box"
              value={formData.email}
              onChange={handleChange}
            />
           
          </div>
           {errors.email && <span className="error">{errors.email}</span>}
          <div className="email-input-div">
            <label className="email-heading">Password <span className="name">*</span></label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="email-box"
              value={formData.password}
              onChange={handleChange}
            />
            
          </div>
          {errors.password && <span className="error">{errors.password}</span>}

          <div className="email-input-div">
            <label className="email-heading">Company name <span className="name">*</span></label>
            <input
              type="text"
              name="company"
              placeholder="Enter your company name"
              className="email-box"
              value={formData.company}
              onChange={handleChange}
            />
           
          </div>
           {errors.company && <span className="error">{errors.company}</span>}

          <div>
            <p>Are you an Agency? <span className="name">*</span></p>
            <div>
              <input
                type="radio"
                name="agency"
                value="Yes"
                checked={formData.agency === "Yes"}
                onChange={handleChange}
              />
              <label>Yes</label>
            </div>
            <div>
              <input
                type="radio"
                name="agency"
                value="No"
                checked={formData.agency === "No"}
                onChange={handleChange}
              />
              <label>No</label>
            </div>
            {errors.agency && <span className="error">{errors.agency}</span>}
          </div>
        </div>
        <button type="submit" className="create-button-login">Create Account</button>
      </form>
    </div>
  );
}

export default Login;
