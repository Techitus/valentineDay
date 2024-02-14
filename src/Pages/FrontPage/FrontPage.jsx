// import React from 'react'
import { useNavigate } from "react-router-dom";
import "./FrontPage.css";
import { useState } from "react";

const FrontPage = () => {
  const navigate = useNavigate();
  const success = () => {
    navigate("/successPage");
  };
  const [buttonPosition, setButtonPosition] = useState({
    left: Math.random() * (window.innerWidth - 100) + 50, 
    top: Math.random() * (window.innerHeight - 100) + 50, 
  });

  const handleButtonClick = () => {
    setButtonPosition({
      left: Math.random() * (window.innerWidth - 100) + 50,
      top: Math.random() * (window.innerHeight - 100) + 50,
    });
  };

  const handleButtonHover = () => {
    setButtonPosition({
      left: Math.random() * (window.innerWidth - 150) + 50, 
      top: Math.random() * (window.innerHeight - 150) + 50, 
    });
  };
  return (
    <div className="wrapper ">
      <div>
        <img
          className="image"
          src="https://i.pinimg.com/originals/17/5d/d3/175dd321b228e72ef723cafdf430eb35.gif"
          alt=""
        />
        <h1 className="header-text">Will you be mine Valentine?</h1>
        <div className="button-section">
          <button
            id="yes-button"
            onClick={success}
            className="button1"
            type="submit"
          >
            Yes
          </button>
          <button
            id="no-button"
            onClick={handleButtonClick}
            style={{
              position: "absolute",
              left: buttonPosition.left,
              top: buttonPosition.top,
            }}
            onMouseOver={handleButtonHover}
            className="button2"
            type="submit"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
