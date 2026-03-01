import React from "react";
import "./Button.css";


export default function Button({ label, image, alt, onClick ,disabled }) {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {image && (
        <img
          src={image}
          alt={alt}
          
        />
      )}
      <span className="button-label">{label}</span>
    </button>
  );
}