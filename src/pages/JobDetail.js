import React, { useEffect, useState } from 'react';
import getData from '../api/api';
import { useParams } from 'react-router-dom';

const JobDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();
  const setState = async () => {
    const data = await getData();
    const [jobDetails] = data.filter((job) => job.id.toString() === id);
    setDetails(jobDetails);
  };
  useEffect(() => {
    setState();
  });
  if (!details || details.length === 0) return <p>loading...</p>;
  return (
    <div className="bg-green-200 text-green-900">
      Details of the job- {id}
      <h3>{details.company}</h3>
    </div>
  );
};

export default JobDetail;
