import React, { useState } from 'react';
import MDEditor, { commands } from '@uiw/react-md-editor';
import { postWithAxios } from './utils/axios';

const InputModal = ({ setModal, bytes, setBytes }) => {

  const [input, setInput] = useState('');
  const [charCount, setCharCount] = useState(0);


  const handleSubmitByte = () => {
    postWithAxios('/api/v1/bytes', {content: input})
      .then((response) => {
        setBytes([response.data.data, ...bytes]);
        setModal(false);
      })
      .catch((error) => console.log(error))
  };

  const handleChange = (e) => {
    setCharCount(e.split('').length);
    setInput(e);
  };

  return (
    <div
      data-id='addBrain'
      className='vh-100 w-100 d-flex flex-col absolute top-0 left-0 bg-bb-dark color-bb-green'
    >
      <header className='w-100 border-bottom border-blue-900 d-flex justify-content-between py-1'>
        <button className='border rounded-pill px-3 py-1 m-2 text-center' onClick={() => setModal(false)}>
          Back
        </button>
        <button
          className={`border rounded-pill px-3 py-1 m-2 text-center ${charCount > 400 ? 'text-muted' : ''}`}
          onClick={() => handleSubmitByte()}
          disabled={charCount > 400}
        >Add</button>
      </header>

      <div className='relative my-4 p-4 w-full md:w-10/12 lg:w-1/2 mx-auto'>
        <MDEditor
          value={input}
          onChange={(e) => handleChange(e)}
          preview={'edit'}
          commands={[ commands.bold, commands.italic, commands.code ]}
        />
        {!input &&
          <span
            className='absolute top-16 text-muted pointer-events-none'
            style={{ left: '34px' }}
          >Share your brain (400 charachaters max.)</span>
        }
        <p className={`text-right ${charCount > 400 ? 'text-danger' : ''}`}>{charCount}/400</p>
      </div>
    </div>
  );
};

export default InputModal;
