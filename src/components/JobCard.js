import React from 'react';

const JobCard = ({ detail }) => {
  return (
    <div className="bg-white dark:bg-blue-dark px-[2rem] pb-[2rem] rounded-md relative w-full min-h-[12.65rem] max-w-[22rem] flex flex-col justify-between">
      <div className="w-[2.5rem] h-[2.5rem] bg-grey-dark rounded-md flex justify-center items-center absolute -top-4 left-[1.6rem]" style={{ backgroundColor: detail.logoBackground }}>
        <img src={process.env.PUBLIC_URL + detail.logo} alt={detail.company} />
      </div>
      <div>
        <div className="pt-[3.063rem]">
          <p className="text-grey-dark text-xs">
            {detail.postedAt}
            <span className="font-extrabold px-1.5">.</span>
            {detail.contract}
          </p>
          <p className="font-semibold py-2">{detail.position}</p>
          <p className="text-grey-dark text-xs">{detail.company}</p>
      </div>
      </div>
        <p className="text-xs text-violet-dark font-bold">{detail.location}</p>
    </div>
  );
};

export default JobCard;
