import React, { useState } from 'react';
import { postWithAxios } from './utils/axios';

const InputModal = ({ setModal }) => {

  const [input, setInput] = useState('');

  const handleChangeInput = (e) => {
    setInput(e.target.innerText);
  };

  const handleSubmitByte = () => {
    postWithAxios('/api/v1/bytes', {content: input})
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  };

  return (
    <div
      data-id='addBrain'
      className='vh-100 w-100 d-flex flex-col absolute top-0 left-0 bg-white'
    >
      <header className='w-100 border-bottom border-blue-900 d-flex justify-content-around'>
        <h2 className='border rounded-pill px-3 py-1 m-2 text-center' onClick={() => setModal(false)}>
          Back
        </h2>
        <h2
          className='border rounded-pill px-3 py-1 m-2 text-center'
          onClick={() => handleSubmitByte()}
        >
          Add
        </h2>
      </header>

      <div className='relative my-4'>
        <span
          className="textarea border-bottom w-75 mx-auto d-block outline-none"
          role="textbox"
          contentEditable
          onInput={(e) => handleChangeInput(e)}
        ></span>
      </div>
    </div>
  );
};

export default InputModal;
