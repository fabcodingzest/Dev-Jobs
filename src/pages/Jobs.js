import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import JobCard from '../components/JobCard';

const Jobs = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const data = await res.json();
    setData(data);
  };
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1000);
  }, []);
  if (!data || data.length === 0) return <p>loading...</p>;
  return (
    <Container>
      <div className="grid grid-cols-3 gap-x-6 gap-y-12 -mt-8 relative z-10">
        {data.map((item) => (
          <JobCard key={item.id} detail={item} />
        ))}
      </div>
    </Container>
  );
};

export default Jobs;
