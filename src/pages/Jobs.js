import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getData from '../api/api';
import Button from '../components/Button';
import Container from '../components/Container';
import JobCard from '../components/JobCard';

const Jobs = () => {
  const [data, setData] = useState([]);
  const setState = async () => {
    const data = await getData();
    setData(data);
  };
  useEffect(() => {
    setTimeout(() => {
      setState();
    }, 1000);
  }, []);
  if (!data || data.length === 0) return <p>loading...</p>;
  return (
    <Container className="pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 -mt-8 relative z-10 pb-10">
        {data.map((item) => (
          <Link to={`../job-detail/${item.id}`} key={item.id} className="flex justify-center w-full">
            <JobCard detail={item} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center pb-10">
        <Button text="Load More" className="bg-violet-dark text-white hover:bg-violet-light" />
        {/* <Button text="Load More" className="bg-violet-dark bg-opacity-10 text-violet-dark hover:bg-violet-dark hover:bg-opacity-40" />
        <Button text="Load More" className="bg-grey-btn text-white hover:bg-grey-hover" /> */}
      </div>
    </Container>
  );
};

export default Jobs;
