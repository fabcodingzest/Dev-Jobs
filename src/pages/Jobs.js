import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getData from '../api/api';
import Button from '../components/Button';
import Container from '../components/Container';
import JobCard from '../components/JobCard';
import Search from '../components/Search';

const Jobs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const setState = async () => {
    const data = await getData();
    setLoading(false);
    setData(data);
  };
  useEffect(() => {
    setTimeout(() => {
      setState();
    }, 1000);
  }, []);
  return (
    <Container className="pb-10 -mt-8">
      <Search setData={setData} />
      {loading ? (
        <p>loading...</p>
      ) : data?.length === 0 ? (
        <p>No Jobs found...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 relative z-10 py-10">
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
        </>
      )}
    </Container>
  );
};

export default Jobs;
