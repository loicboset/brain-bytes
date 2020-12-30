import React, { useState } from 'react';
import MDEditor, { commands } from '@uiw/react-md-editor';
import { postWithAxios } from './utils/axios';

const InputModal = ({ setModal, bytes, setBytes }) => {

  const [input, setInput] = useState('');
  const [title, setTitle] = useState('');
  const [charCount, setCharCount] = useState(0);


  const handleSubmitByte = () => {
    if (input && title) {
      postWithAxios('/api/v1/bytes', {content: input, title: title})
        .then((response) => {
          setBytes([response.data.data, ...bytes]);
          setModal(false);
        })
        .catch((error) => console.log(error))
    }
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
        <label className='color-bb-green' htmlFor="title">Title</label>
        <input
          type="text" id="title" name="title" required
          minLength="4" maxLength="40"
          placeholder='Meaningfully short title'
          className='w-full mb-4 p-1 color-bb-dark'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className='color-bb-green' htmlFor="content">Content</label>
        <MDEditor
          name='content'
          title='content'
          value={input}
          onChange={(e) => handleChange(e)}
          preview={'edit'}
          commands={[ commands.bold, commands.italic, commands.code ]}
        />
        {!input &&
          <span
            className='absolute text-muted pointer-events-none'
            style={{ left: '34px', top: '185px', fontSize: '14px' }}
          >Share your brain (400 charachaters max.)</span>
        }
        <p className={`text-right ${charCount > 400 ? 'text-danger' : ''}`}>{charCount}/400</p>
      </div>
    </div>
  );
};

export default InputModal;
