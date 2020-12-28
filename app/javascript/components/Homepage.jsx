import React, { useState, useEffect } from 'react';
import InputModal from './InputModal';
import { getWithAxios } from './utils/axios';

const Homepage = () => {
  const [menu, setMenu] = useState(false);
  const [bytes, setBytes] = useState([]);
  const [modal, setModal] = useState(false);
  console.log(bytes);
  useEffect(() => {
    getWithAxios('/api/v1/bytes')
      .then((response) => setBytes(response.data.data))
      .catch((error) => console.log(error))
  }, []);

  return (
    <>
      <div className='vh-100 d-flex flex-col justify-content-center align-items-center bg-bb-dark color-bb-green'>
        <header className='w-100 border-bottom border-blue-900 d-flex justify-between align-items-center'>
          <h1 className='p-3 text-center'>Brain Bytes</h1>
          <div className='relative'>
            <img
              src={`https://eu.ui-avatars.com/api/?name=Elon+Musk&rounded=true`}
              className='w-8 mr-3'
              onClick={() => setMenu(!menu)}
            />
            <div className={`absolute border right-2 mt-1 bg-white ${menu ? 'd-block' : 'hidden'}`}>
              <a href='/users/sign_out' data-method="delete" className='px-10 py-1 w-max d-block'>Log out</a>
            </div>
          </div>
        </header>

        <div className='w-100 overflow-scroll'>

          {bytes.map(byte => (
            <div key={byte.id} className='px-4 py-2 border-top border-bottom'>
              <p>{byte.attributes.content}</p>
            </div>
          ))}

        </div>

        <div
          className='absolute bottom-5 right-5 border border-blue-700 bg-bb-green color-bb-dark p-2 rounded-2xl'
          onClick={() => setModal(true)}
        >
          BRAIN
        </div>


      </div>
      {modal && <InputModal bytes={bytes} setBytes={setBytes} setModal={setModal} />}
    </>
  )
};

export default Homepage;
