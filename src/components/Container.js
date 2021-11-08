import React from 'react';

const Container = ({ children, className }) => {
  return <div className={`${className} px-[0.7rem] sm:px-10 md:px-0 md:mx-auto lg:max-w-[55.5rem]`}>{children}</div>;
};

export default Container;
