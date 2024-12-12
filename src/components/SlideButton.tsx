import React from "react";
import "./SlideButton.css"

interface SlideButtonProps {
    caption?: string;
    width?: string;
  }

  const SlideButton: React.FC<SlideButtonProps> = ({ caption = "Let's talk", width="auto" }) => {
    return (
      <a href="" className='connect-btn' style={{width}}>
        <span >{caption}</span>
        <svg
          className="icon"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            className="icon-path"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.343 15.657L15.657 4.343m0 0v9.9m0-9.9h-9.9"
          />
        </svg>
      </a>
    );
  };
  
  

export default SlideButton;