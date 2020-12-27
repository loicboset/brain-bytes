import React, { useState, useEffect } from 'react';
import InputModal from './InputModal';

const Homepage = () => {
  const axios = require('axios');
  const [bytes, setBytes] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    axios.get('/api/v1/bytes')
      .then((response) => setBytes(response.data.data))
      .catch((error) => console.log(error))
  }, []);

  return (
    <>
      <div
        className='vh-100 d-flex flex-col justify-content-center align-items-center'
      >
        <header className='w-100 border-bottom border-blue-900'>
          <h1 className='p-3 text-center'>Brain Bytes</h1>
        </header>

        <div className='w-100 overflow-scroll'>

          {bytes.map(byte => (
            <div key={byte.id} className='px-4 py-2 border-top border-bottom'>
              <p>{byte.attributes.content}</p>
            </div>
          ))}

        </div>

        <div
          className='absolute bottom-5 right-5 border border-blue-700 bg-blue-100 p-2 rounded-2xl'
          onClick={() => setModal(true)}
        >
          BRAIN
        </div>


      </div>
      {modal && <InputModal setModal={setModal} />}
    </>
  )
};

export default Homepage;
