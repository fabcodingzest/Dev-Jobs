import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center max-w-sm mx-auto py-[30vh] items-center">
      <span className="flex justify-center items-center relative w-[1.6rem] h-[1.6rem]">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-light opacity-75"></span>
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-light opacity-50"></span>
        <span className="relative inline-flex rounded-full h-[0.6rem] w-[0.6rem] bg-violet-dark"></span>
      </span>
    </div>
  );
};

export default Loader;
