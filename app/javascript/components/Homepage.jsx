import React, { useState, useEffect } from 'react';

// components
import InputModal from './InputModal';
import Header from './Header';
import Byte from './Byte';
import BrainDark from './icons/brain_dark.svg';

// utils
import { getWithAxios, postWithAxios } from './utils/axios';

const Homepage = () => {
  const [bytes, setBytes] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getWithAxios('/api/v1/bytes')
      .then((response) => {
        setBytes(response.data.data);
      })
      .catch((error) => console.log(error))
  }, []);

  const handleAddVote = (id) => {
    postWithAxios(`/api/v1/bytes/${id}/votes`, {})
    .then((response) => {
      console.log(response);
      const index = bytes.findIndex(byte => byte.id === id);
      bytes[index].attributes.vote_count = response.data.data.attributes.vote_count;
      setBytes([...bytes]);
    })
    .catch((response) => console.log(response))
  };

  return (
    <>
      <div className='vh-100 d-flex align-items-center flex-col align-items-center bg-bb-dark color-bb-green'>
        <Header />

        <div className='w-full md:w-10/12 lg:w-1/2 overflow-scroll'>

          {bytes.map(byte => (
            <Byte
              key={byte.id}
              byte={byte}
              bytes={bytes}
              setBytes={setBytes}
              handleAddVote={handleAddVote}
            />
          ))}

        </div>

        <div
          className='d-flex align-items-center absolute bottom-5 right-5 border border-blue-700 bg-bb-green color-bb-dark p-2 rounded-2xl'
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
