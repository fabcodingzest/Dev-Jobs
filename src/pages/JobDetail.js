import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getData from '../api/api';
import Button from '../components/Button';
import Container from '../components/Container';

const JobDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();
  useEffect(() => {
    const setState = async () => {
      const data = await getData();
      const [jobDetails] = data.filter((job) => job.id.toString() === id);
      setDetails(jobDetails);
    };
    setState();
  }, [id]);
  if (!details || details.length === 0) return <p>loading...</p>;
  return (
    <>
      <Container className="pb-10 -mt-8 md:mx-auto md:max-w-[36.5rem] lg:max-w-[36.5rem]">
        <div className="bg-white dark:bg-blue-dark px-[2rem] pb-[2rem] sm:px-0 sm:py-0 sm:pr-8 relative w-full min-h-[10.65rem] sm:min-h-[7rem] max-w-[22rem] sm:max-w-full flex flex-col sm:flex-row justify-between items-center mx-auto rounded-md">
          <div className="flex justify-center w-full sm:w-3/12 self-stretch">
            <div className="w-[2.5rem] h-[2.5rem] sm:w-full sm:h-full  bg-grey-dark rounded-md sm:rounded-none sm:rounded-l-md  flex justify-center items-center absolute -top-4 sm:static sm:top-0 sm:p-5 md:p-7 lg:p-8" style={{ backgroundColor: details.logoBackground }}>
              <img className="sm:w-full" src={`../${details.logo}`} alt={details.company} />
            </div>
          </div>
          <div className="text-center pt-3 sm:w-6/12 sm:text-left sm:px-4 sm:pt-0">
            <h1 className="font-semibold lg:text-xl">{details.company}</h1>
            <p className="text-grey-dark text-xs lg:py-1">{`${details.company.toLowerCase()}.com`}</p>
          </div>
          <div className="sm:w-4/12 flex justify-end">
            <a target="blank" rel="noopener noreferrer" href={details.website}>
              <Button text="Comapany Site" className="bg-violet-dark bg-opacity-10 text-violet-dark hover:bg-violet-dark hover:bg-opacity-40 dark:bg-grey-btn dark:text-white dark:hover:bg-grey-hover text-xs md:text-sm xl:px-4" />
            </a>
          </div>
        </div>
        <div className="p-5 md:p-[2.25rem] bg-white dark:bg-blue-dark mt-8 rounded-md max-w-[22rem] sm:max-w-full mx-auto">
          <div className="flex w-full justify-between items-center">
            <div>
              <p className="text-grey-dark text-xs">
                {details.postedAt}
                <span className="font-extrabold px-1.5">.</span>
                {details.contract}
              </p>
              <h2 className="font-bold py-1 lg:text-2xl">{details.position}</h2>
              <p className="text-xs text-violet-dark font-bold pt-1">{details.location}</p>
            </div>
            <a target="blank" rel="noopener noreferrer" href={details.apply}>
              <Button text="Apply Now" className="bg-violet-dark text-white hover:bg-violet-light text-xs md:text-sm" />
            </a>
          </div>
          <p className="text-xs text-grey-dark py-5 leading-5">{details.description}</p>
          <h3 className="font-bold">Requirements</h3>
          <p className="text-xs text-grey-dark pt-5 leading-5">{details.requirements.content}</p>
          <ul className="py-5 leading-5 px-3 md:px-[1rem] list-disc text-xs text-grey-dark">
            {details.requirements.items.map((item, i) => (
              <li className="pl-2 md:pl-5" key={i}>
                {item}
              </li>
            ))}
          </ul>
          <h3 className="font-bold">What You Will Do</h3>
          <p className="text-xs text-grey-dark pt-5 leading-5">{details.role.content}</p>
          <ul className="py-5 leading-5 px-3 md:px-[1rem] list-disc text-xs text-grey-dark">
            {details.role.items.map((item, i) => (
              <li className="pl-2 md:pl-5" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <footer className="bottom-0 py-4 px-8 bg-white dark:bg-blue-dark">
        <div className="w-full max-w-xl mx-auto flex justify-between items-center">
          <div>
            <h2 className="font-bold py-1 lg:text-lg">{details.position}</h2>
            <p className="text-grey-dark text-xs">{details.company}</p>
          </div>
          <a target="blank" rel="noopener noreferrer" href={details.apply}>
            <Button text="Apply Now" className="bg-violet-dark text-white hover:bg-violet-light text-xs md:text-sm" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default JobDetail;
