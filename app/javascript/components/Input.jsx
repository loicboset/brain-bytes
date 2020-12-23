import React from 'react';

const Input = () => {

  return (
    <div className='w-75 mx-auto mt-2'>
      {/* <span 
        contentEditable
        role="textbox"
        className='w-100 border-bottom'
        placeholder='Share a brain byte'
        id='byte'
      >
      </span> */}
      <span className='absolute text-muted pointer-events-none'>Share a brain byte</span>
      <div 
        className='border-bottom outline-none' 
        contentEditable data-text="Enter text here"
      ></div>
    </div>
  )
};

export default Input;