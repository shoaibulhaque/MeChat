import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold mb-4'>Welcome to our Chat App</h1>
      <div className="Buttons flex flex-col text-center font-bold">
        <Link to="/messenger/login" className='text-white px-4 py-2 rounded mr-2 mb-4 bg-blue-500' >Login</Link>
        <Link to="/messenger/register" className='text-white px-4 py-2 rounded mr-2 mb-4 bg-blue-500' >Register</Link>
      </div>
      
    </div>
  );
};

export default LandingPage;