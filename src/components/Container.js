import React from 'react';

const Container = ({ children, className }) => {
  return <div className={`${className} px-[0.7rem] md:mx-auto lg:max-w-[56.9rem]`}>{children}</div>;
};

export default Container;
