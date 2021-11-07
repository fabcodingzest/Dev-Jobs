import React from 'react';

const Button = ({ text, className, icon }) => {
  return (
    <button className={`px-1.5 lg:px-4 xl:px-6 py-2 rounded ${className} font-semibold`}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
