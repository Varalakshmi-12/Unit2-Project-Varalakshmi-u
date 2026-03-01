import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CreditCardPage.css";
import Button from "../components/Button";



export default function CreditCardSignup() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    cards: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.cards) newErrors.cards = "Please select number of cards";
    return newErrors;
  };

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <main className="form-container">
      <h2>Credit Card Signup</h2>

      {submitted ? (
        <p className="success">Thank you, {formData.name}! Your form has been submitted.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <section>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </section>

          <section>
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </section>

          <section>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </section>

          <section>
            <label>Address:</label>
            <textarea
            spellCheck="false"
              data-gramm="false"
              data-gramm_editor="false"
              
              name="address"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
            {errors.address && <span className="error">{errors.address}</span>}
          </section>

          <section>
            <label>Number of Cards:</label>
            <select name="cards" value={formData.cards} onChange={handleChange}>
              <option value="">-- Select --</option>
              <option value="1">1 </option>
              <option value="2">2 </option>
              <option value="3">3 </option>
            </select>
            {errors.cards && <span className="error">{errors.cards}</span>}
          </section>

          <Button label="Submit"/>
        </form>

        
      )}
          <section>
            <nav className="nav-home">
              <Link to="/">Go Back to Home</Link>
              </nav>
            </section>  
    </main>
     
  );
}

