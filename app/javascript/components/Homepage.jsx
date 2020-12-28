import React, { useState, useEffect } from 'react';
import MDEditor, { commands } from '@uiw/react-md-editor';

// components
import InputModal from './InputModal';
import Header from './Header';
import ReactLogo from './brain.svg';

// utils
import { getWithAxios } from './utils/axios';

const Homepage = () => {
  const [bytes, setBytes] = useState([]);
  const [modal, setModal] = useState(false);
  const isLogin = BrainBytes.user.id;

  console.log(ReactLogo);

  useEffect(() => {
    getWithAxios('/api/v1/bytes')
      .then((response) => setBytes(response.data.data))
      .catch((error) => console.log(error))
  }, []);

  return (
    <>
      <div className='vh-100 d-flex flex-col justify-content-center align-items-center bg-bb-dark color-bb-green'>
        <Header />

        <div className='w-100 overflow-scroll'>

          {bytes.map(byte => (
            <div key={byte.id} className='px-4 py-2 border-top border-bottom'>
              <MDEditor.Markdown source={byte.attributes.content} />
            </div>
          ))}

        </div>

        <div
          className='d-flex absolute bottom-5 right-5 border border-blue-700 bg-bb-green color-bb-dark p-2 rounded-2xl'
          onClick={() => setModal(true)}
        >
          <span className='text-2xl'>+</span>
          <img className='w-8' src={ReactLogo} alt="Add Brain Byte" />
        </div>


      </div>
      {modal && <InputModal bytes={bytes} setBytes={setBytes} setModal={setModal} />}
    </>
  )
};

export default Homepage;
