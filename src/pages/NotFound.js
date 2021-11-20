import React from 'react';
import { useNavigate } from 'react-router-dom';
import NotFoundImg from '../assets/undraw_blank_canvas_-3-rbb.svg';
import Button from '../components/Button';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="max-w-sm mx-auto flex flex-col justify-center items-center text-center">
      <p className="py-10 text-2xl">Resource not found...</p>
      <img className="max-w-full pb-10" src={NotFoundImg} alt="Not found" />
      <Button onClick={() => navigate(-1)} text="Go Back" className="bg-violet-dark text-white hover:bg-violet-light" />
    </main>
  );
};

export default NotFound;
