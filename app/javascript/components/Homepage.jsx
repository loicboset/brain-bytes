import React from 'react';
import Input from './Input';

const Homepage = () => {

  return (
    <div 
      className='vh-100 d-flex justify-content-center align-items-center'
      style={{ backgroundColor: '#FFD400' }}
    >
      <h1 className='absolute top-4 font-weight-bold text-2xl text-blue-900'>Brain Bytes</h1>
      <div className='w-75 h-75 bg-white rounded-xl flex-col d-flex shadow-2xl border-4 border-blue-900'>

        <Input />

        <div className='border-bottom mt-4'></div>

      </div>
    </div>
  )
};

export default Homepage;