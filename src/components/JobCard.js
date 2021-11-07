import React from 'react';

const JobCard = ({ detail }) => {
  return (
    <div className="bg-white dark:bg-blue-dark p-[1.6rem] rounded-md relative">
      <div className="w-[2.5rem] h-[2.5rem] bg-grey-dark rounded-md flex justify-center items-center absolute -top-4 left-[1.6rem]" style={{ backgroundColor: detail.logoBackground }}>
        <img src={process.env.PUBLIC_URL + detail.logo} alt={detail.company} />
      </div>
      <div className="pt-[0.8rem]">
        <p className="text-grey-dark text-xs">
          {detail.postedAt}
          <span className="font-extrabold px-1.5">.</span>
          {detail.contract}
        </p>
        <p className="font-bold py-2">{detail.position}</p>
        <p className="text-grey-dark text-xs">{detail.company}</p>
      <p className="text-xs text-violet-dark font-bold pt-8">{detail.location}</p>
      </div>
    </div>
  );
};

export default JobCard;
