import React from 'react';

const CardContent = ({ children, className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {children}
    </div>
  );
};

export default CardContent;
