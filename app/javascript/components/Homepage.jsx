import React, { useState, useEffect } from 'react';
import MDEditor, { commands } from '@uiw/react-md-editor';

// components
import InputModal from './InputModal';
import Header from './Header';
import BrainWhite from './brain_white.svg';
import BrainDark from './brain_dark.svg';

// utils
import { getWithAxios, patchWithAxios } from './utils/axios';

const Homepage = () => {
  const [bytes, setBytes] = useState([]);
  const [modal, setModal] = useState(false);
  const isLogin = BrainBytes.user.id;

  useEffect(() => {
    getWithAxios('/api/v1/bytes')
      .then((response) => {
        setBytes(response.data.data);
      })
      .catch((error) => console.log(error))
  }, []);

  const handleAddCount = (id) => {
    patchWithAxios(`/api/v1/bytes/${id}`, {})
    .then((response) => {
      const index = bytes.findIndex(byte => byte.id === id);
      bytes[index].attributes.count = response.data.data.attributes.count;
      setBytes([...bytes]);
    })
    .catch((response) => console.log(response))
  };

  return (
    <>
      <div className='vh-100 d-flex flex-col justify-content-center align-items-center bg-bb-dark color-bb-green'>
        <Header />

        <div className='w-100 overflow-scroll'>

          {bytes.map(byte => (
            <div key={byte.id} className='px-4 py-2 border-top border-bottom'>
              <MDEditor.Markdown source={byte.attributes.content} />
              <div className='d-flex mt-2'>
                <img onClick={() => handleAddCount(byte.id)} className='w-4 mr-1' src={BrainWhite} alt="Brain" />
                <span>{byte.attributes.count ? byte.attributes.count : 0 }</span>
              </div>
            </div>
          ))}

        </div>

        <div
          className='d-flex absolute bottom-5 right-5 border border-blue-700 bg-bb-green color-bb-dark p-2 rounded-2xl'
          onClick={() => setModal(true)}
        >
          <span className='text-2xl'>+</span>
          <img className='w-8' src={BrainDark} alt="Brain" />
        </div>


      </div>
      {modal && <InputModal bytes={bytes} setBytes={setBytes} setModal={setModal} />}
    </>
  )
};

export default Homepage;
