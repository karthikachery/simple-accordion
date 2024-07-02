import React, { useState } from "react";
import './Accordion.css';
export default function Accordion({ title, content, open, onClick }) {
  return (
    <div className="accordion">
      <div
        className="accordion-header"
        onClick={onClick}
      >
        <h2>{title}</h2>
        <span>{open ? "-" : "+"}</span>
      </div>
      {open && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}
