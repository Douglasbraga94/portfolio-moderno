import React from 'react';
import './Terminal.css';

const Terminal = ({ title, command, children, className = "" }) => {
  return (
    <div className={`arch-card ${className}`}>
      {title && (
        <div className="arch-header">
          <span className="arch-number">/</span>
          <span className="arch-title-text">{title}</span>
        </div>
      )}
      <div className="arch-content">
        {children}
      </div>
    </div>
  );
};

export default Terminal;
