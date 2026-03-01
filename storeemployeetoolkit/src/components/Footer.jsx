import React, { useState, useEffect } from "react";
import "./Footer.css";

export default function Footer() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(()=> {
    
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    
    return () => clearInterval(timer);
  }, []);
  
  return (
        <footer className="Footer">
          
          <p className="footer-text">© 2025 My React Project.All rights reserved.</p>
          <p className="footer-time">{dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}</p>
          
        </footer>

  )
}