import React from 'react';
import MDEditor, { commands } from '@uiw/react-md-editor';
import BrainWhite from './icons/brain_white.svg';
import Pen from './icons/pen.svg';

const Byte = ({ byte, handleAddVote }) => {

  const isAuthor = !!BrainBytes.user.id;

  return (
    <div className='px-4 py-2 border-bottom'>
      <MDEditor.Markdown source={byte.attributes.content} />
      <div className='d-flex align-items-center mt-2 justify-between'>
        <div className='d-flex align-items-center' >
          <img onClick={() => handleAddVote(byte.id)} className='w-4 mr-1' src={BrainWhite} alt="Brain" />
          <span>{byte.attributes.vote_count}</span>
        </div>
        {isAuthor && (
          <img className='w-4 ml-2 text-white' src={Pen} />
        )}
      </div>
    </div>
  )
};

export default Byte;
