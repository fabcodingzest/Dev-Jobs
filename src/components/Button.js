import React from 'react';

const Button = ({ text, className, icon, type }) => {
  return (
    <button type={type} className={`px-1.5 lg:px-4 xl:px-[1.784rem] py-2 lg:py-[0.6rem] rounded ${className} font-semibold`}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
