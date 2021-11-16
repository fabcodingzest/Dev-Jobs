import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getData from '../api/api';
import Button from '../components/Button';
import Container from '../components/Container';

const JobDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  useEffect(() => {
    const setState = async () => {
      const data = await getData(id);
      setDetail(data);
    };
    setState();
  }, [id]);
  if (!detail || detail.length === 0) return <p>loading...</p>;
  const roleItems = detail.roleItems.split('').slice(2, -2).join('').split("', '");
  const reqItems = detail.reqItems.split('').slice(2, -2).join('').split("', '");

  return (
    <>
      <Container className="pb-10 -mt-8 md:mx-auto md:max-w-[36.5rem] lg:max-w-[36.5rem]">
        <div className="bg-white dark:bg-blue-dark px-[2rem] pb-[2rem] sm:px-0 sm:py-0 sm:pr-8 relative w-full min-h-[10.65rem] sm:min-h-[7rem] max-w-[22rem] sm:max-w-full flex flex-col sm:flex-row justify-between items-center mx-auto rounded-md">
          <div className="flex justify-center w-full sm:w-3/12 self-stretch">
            <div className="w-[2.5rem] h-[2.5rem] sm:w-full sm:h-full  bg-grey-dark rounded-md sm:rounded-none sm:rounded-l-md  flex justify-center items-center absolute -top-4 sm:static sm:top-0 sm:p-5 md:p-7 lg:p-8" style={{ backgroundColor: detail.logoBackground }}>
              <img className="sm:w-full" src={`../${detail.logo}`} alt={detail.company} />
            </div>
          </div>
          <div className="text-center pt-3 sm:w-6/12 sm:text-left sm:px-4 sm:pt-0">
            <h1 className="font-semibold lg:text-xl">{detail.company}</h1>
            <p className="text-grey-dark text-xs lg:py-1">{`${detail.company.toLowerCase()}.com`}</p>
          </div>
          <div className="sm:w-4/12 flex justify-end">
            <a target="blank" rel="noopener noreferrer" href={detail.website}>
              <Button text="Comapany Site" className="bg-violet-dark bg-opacity-10 text-violet-dark hover:bg-violet-dark hover:bg-opacity-40 dark:bg-grey-btn dark:text-white dark:hover:bg-grey-hover text-xs md:text-sm xl:px-4" />
            </a>
          </div>
        </div>
        <div className="p-5 md:p-[2.25rem] bg-white dark:bg-blue-dark mt-8 rounded-md max-w-[22rem] sm:max-w-full mx-auto">
          <div className="flex w-full justify-between items-center">
            <div>
              <p className="text-grey-dark text-xs">
                {detail.postedAt}
                <span className="font-extrabold px-1.5">.</span>
                {detail.contract}
              </p>
              <h2 className="font-bold py-1 lg:text-2xl">{detail.position}</h2>
              <p className="text-xs text-violet-dark font-bold pt-1">{detail.location}</p>
            </div>
            <a target="blank" rel="noopener noreferrer" href={detail.apply}>
              <Button text="Apply Now" className="bg-violet-dark text-white hover:bg-violet-light text-xs md:text-sm" />
            </a>
          </div>
          <p className="text-xs text-grey-dark py-5 leading-5">{detail.description}</p>
          <h3 className="font-bold">Requirements</h3>
          <p className="text-xs text-grey-dark pt-5 leading-5">{detail.reqContent}</p>
          <ul className="py-5 leading-5 px-3 md:px-[1rem] list-disc text-xs text-grey-dark">
            {reqItems.map((item, i) => (
              <li className="pl-2 md:pl-5" key={i}>
                {item}
              </li>
            ))}
          </ul>
          <h3 className="font-bold">What You Will Do</h3>
          <p className="text-xs text-grey-dark pt-5 leading-5">{detail.roleContent}</p>
          <ul className="py-5 leading-5 px-3 md:px-[1rem] list-disc text-xs text-grey-dark">
            {roleItems.map((item, i) => (
              <li className="pl-2 md:pl-5" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="bottom-0 py-4 px-8 bg-white dark:bg-blue-dark">
        <div className="w-full max-w-xl mx-auto flex justify-between items-center">
          <div>
            <h2 className="font-bold py-1 lg:text-lg">{detail.position}</h2>
            <p className="text-grey-dark text-xs">{detail.company}</p>
          </div>
          <a target="blank" rel="noopener noreferrer" href={detail.apply}>
            <Button text="Apply Now" className="bg-violet-dark text-white hover:bg-violet-light text-xs md:text-sm" />
          </a>
        </div>
      </div>
    </>
  );
};

export default JobDetail;
