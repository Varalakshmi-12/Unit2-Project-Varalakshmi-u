import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
export default function Contact() {
  return (
    <section className="contact-container">
    <div >
    <h1>Contact Info</h1>
    <div>
    <p><strong>Support Team:</strong> +1 800 123 4567</p>
    <p><strong>Office Number:</strong> +1 654 123 4567</p>
    <p><strong>Manager Number:</strong> +1 654 658 4567</p>
    <p><strong>Office Email:</strong> support@stores.com</p>
    </div>
    </div>
    <nav className="nav-home">
      <Link to="/">Go Back to Home</Link>
      </nav>
      </section>
  );
}