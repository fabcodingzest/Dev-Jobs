import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getData from '../api/api';
import Button from '../components/Button';
import Container from '../components/Container';
import JobCard from '../components/JobCard';
import Search from '../components/Search';
import NotFound from '../assets/undraw_blank_canvas_-3-rbb.svg';
import Loader from '../components/Loader';

const Jobs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const setState = async () => {
    const data = await getData();
    setLoading(false);
    setData(data);
  };
  useEffect(() => {
    setState();
  }, []);
  return (
    <main>
      <Container className="pb-10 -mt-8">
        <Search setData={setData} />
        {loading ? (
          <Loader />
        ) : data?.length === 0 ? (
          <div className="flex flex-col max-w-sm mx-auto text-center">
            <p className="py-10 text-2xl">No Jobs found...</p>
            <img src={NotFound} alt="Not Found" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 relative z-10 py-10">
              {data.map((item) => (
                <Link to={`../job-detail/${item.id}`} key={item.id} className="flex justify-center w-full">
                  <JobCard detail={item} />
                </Link>
              ))}
            </div>
            {data?.length > 14 && (
              <div className="flex justify-center pb-10">
                <Button text="Load More" className="bg-violet-dark text-white hover:bg-violet-light" />
              </div>
            )}
          </>
        )}
      </Container>
    </main>
  );
};

export default Jobs;
