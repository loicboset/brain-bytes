import React from 'react';

const Input = () => {

  return (
    <div className='w-75 mx-auto mt-2'>
      <textarea 
        className='w-100 border-bottom'
        placeholder='Insert brain bytes here'
        type="text" id="bytes" name="bytes" required minlength="4" maxlength="140" size="10" 
      />
    </div>
  )
};

export default Input;