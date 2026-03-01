import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import "./ShiftPage.css";

export default function ShiftPage() {
  const [message, setMessage] = useState("");
  const [isStartPunchDisabled, setIsStartPunchDisabled] = useState(false);
  const [isMealInPunchDisabled, setIsMealInPunchDisabled] = useState(true);
  const [isMealOutPunchDisabled, setIsMealOutPunchDisabled] = useState(true);
  const [isEndPunchDisabled, setIsEndPunchDisabled] = useState(true);

  const handlePunch = (type) => {
    const time = new Date().toLocaleTimeString();
    setMessage(`Your ${type} punch time is ${time}`);
    if (type === "Start") {
      setIsStartPunchDisabled(true);
      setIsMealInPunchDisabled(false);
      setIsMealOutPunchDisabled(true);
      setIsEndPunchDisabled(false);
    } else if (type === "Meal In") {
      setIsMealInPunchDisabled(true);
      setIsMealOutPunchDisabled(false);
      setIsEndPunchDisabled(true);
    } else if (type === "Meal Out") {
      setIsMealOutPunchDisabled(true);
      setIsEndPunchDisabled(false);
    } else if (type === "End") {
      setIsStartPunchDisabled(false);
      setIsMealInPunchDisabled(true);
      setIsMealOutPunchDisabled(true);
      setIsEndPunchDisabled(true);
    } 
  };

  return (
    <section>
      <h2>Shift Punch</h2>
      <div className="shift-buttons" >
      <Button label="Start Shift" onClick={() => handlePunch("Start")} disabled={isStartPunchDisabled} />
      <Button label="Meal-In Shift" onClick={() => handlePunch("Meal In")} disabled={isMealInPunchDisabled} />
      <Button label="Meal-Out Shift" onClick={() => handlePunch("Meal Out")} disabled={isMealOutPunchDisabled} />
      <Button label="End Shift" onClick={() => handlePunch("End")} disabled={isEndPunchDisabled} />
        </div>
      
      {message && <p className="shift-message">{message}</p>}
      
      <nav className="nav-home">
      <Link to="/">Go Back to Home</Link>
      </nav>
    </section>
  );
}