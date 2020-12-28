import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // const isLogin = BrainBytes.user.id;
  const isLogin = true;

  const [menu, setMenu] = useState(false);

  const loggedIn = () => (
    <div className='relative'>
      <img
        src={`https://eu.ui-avatars.com/api/?name=Elon+Musk&rounded=true`}
        className='w-8 mr-3'
        onClick={() => setMenu(!menu)}
      />
      <div className={`absolute border right-2 mt-1 color-bb-dark bg-white ${menu ? 'd-block' : 'hidden'}`}>
        <a href='/users/sign_out' data-method="delete" className='px-10 py-1 w-max d-block'>Log out</a>
      </div>
    </div>
  );

  const loggedOut = () => (
    <Link to={'/login'} >
      <button className='border rounded-pill px-2 py-1 mr-3'>
        Login / Sign up
      </button>
    </Link>
  );

  return (
    <header className='w-100 border-bottom border-blue-900 d-flex justify-between align-items-center'>
      <h1 className='p-3 text-center'>Brain Bytes</h1>

      {isLogin ? loggedIn() : loggedOut()}

    </header>
  )
};

export default Header;
