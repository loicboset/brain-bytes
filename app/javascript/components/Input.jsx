import React, { useState } from 'react';

const Input = () => {

  const [placeholder, setPlaceholder] = useState(true);
  const [input, setInput] = useState('')

  const handleOnInput = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <div className='w-75 mx-auto mt-2'>
      {/* <span className='absolute text-muted pointer-events-none'>{placeholder && 'Share a brain byte'}</span> */}
    </div>
  )
};

export default Input;