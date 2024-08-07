import React, { useRef } from 'react';
import './Btn.css';

const Btn = ({ children, className, ...props }) => {
  const buttonRef = useRef(null);
  const spanRef = useRef(null);

  const handleMouseOver = (e) => {
    const button = buttonRef.current;
    const span = spanRef.current;
    const rect = button.getBoundingClientRect();
    
    span.style.left = `${e.clientX - rect.left}px`;
    span.style.top = `${e.clientY - rect.top}px`;
  };

  const handleMouseOut = (e) => {
    const button = buttonRef.current;
    const span = spanRef.current;
    const rect = button.getBoundingClientRect();

    span.style.left = `${e.clientX - rect.left}px`;
    span.style.top = `${e.clientY - rect.top}px`;
  };

  return (
    <button 
      ref={buttonRef}
      className={`dribble-button ${className}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      {...props}
    >
      <span ref={spanRef} className="dribble-span" />
      {children}
    </button>
  );
};

export default Btn;
