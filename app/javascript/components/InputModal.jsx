import React, { useState } from 'react';
import MDEditor, { commands } from '@uiw/react-md-editor';
import { postWithAxios } from './utils/axios';

const InputModal = ({ setModal, bytes, setBytes }) => {

  const isLogin = BrainBytes.user.id;
  const [input, setInput] = useState('');
  console.log(input);
  const handleChangeInput = (e) => {
    setInput(e.target.innerText);
  };

  const handleSubmitByte = () => {
    postWithAxios('/api/v1/bytes', {content: input})
      .then((response) => {
        setBytes([response.data.data, ...bytes]);
        setModal(false);
      })
      .catch((error) => console.log(error))
  };

  return (
    <div
      data-id='addBrain'
      className='vh-100 w-100 d-flex flex-col absolute top-0 left-0 bg-bb-dark color-bb-green'
    >
      <header className='w-100 border-bottom border-blue-900 d-flex justify-content-between py-1'>
        <h2 className='border rounded-pill px-3 py-1 m-2 text-center' onClick={() => setModal(false)}>
          Back
        </h2>
        <h2
          className='border rounded-pill px-3 py-1 m-2 text-center'
          onClick={() => handleSubmitByte()}
        >Add</h2>
      </header>

      <div className='relative my-4 p-4'>
        {/* <span
          className="textarea border-bottom w-75 mx-auto d-block outline-none"
          role="textbox"
          contentEditable
          onInput={(e) => handleChangeInput(e)}
        ></span> */}
        <MDEditor
          value={input}
          onChange={setInput}
          preview={'edit'}
          commands={[ commands.bold, commands.italic, commands.code ]}
        />
        {/* <MDEditor.Markdown source={input} /> */}
      </div>
    </div>
  );
};

export default InputModal;
