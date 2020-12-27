import React, { useState, useEffect } from 'react';

const InputModal = ({ setModal }) => {

  const [placeholder, setPlaceholder] = useState(true)
  const [input, setInput] = useState('')

  useEffect(() => {
    console.log('trigered');
    const inputBox = document.querySelector('#inputBox');
    console.log(inputBox.style);
  }, [input])

  return (
    <div
      data-id='addBrain' 
      className='vh-100 w-100 d-flex flex-col absolute top-0 left-0 bg-white'
    >
      <header className='w-100 border-bottom border-blue-900 d-flex justify-content-around'>
        <h2 className='border rounded-pill px-3 py-1 m-2 text-center' onClick={() => setModal(false)}>
          Back
        </h2>
        <h2 className='border rounded-pill px-3 py-1 m-2 text-center'>Add</h2>
      </header>

      <div className='relative my-4'>
        <textarea 
          id='inputBox'
          placeholder='Share a brain byte' 
          className='border-bottom w-75 mx-auto d-block outline-none'
          value={input}
          onInput={(e) => setInput(e.target.value)}
        >

        </textarea>
      </div>
    </div>
  );
};

export default InputModal;