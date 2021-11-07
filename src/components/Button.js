import React from 'react';

const Button = ({ text, className }) => {
  return <button className={`mx-2 px-6 py-2 rounded ${className} font-semibold`}>{text}</button>;
};

export default Button;
