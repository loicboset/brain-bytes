import React, { useState } from 'react';
import MDEditor, { commands } from '@uiw/react-md-editor';

// components
import BrainWhite from './icons/brain_white.svg';
import Pen from './icons/pen.svg';
import Save from './icons/save.svg';

// utils
import { patchWithAxios } from './utils/axios';

const Byte = ({ byte, handleAddVote, bytes, setBytes }) => {

  const isAuthor = !!BrainBytes.user.id;
  const [input, setInput] = useState(byte.attributes.content);
  const [editMode, setEditMode] = useState(false);

  const handleSave = (id) => {
    patchWithAxios(`/api/v1/bytes/${id}`, {content: input})
    .then(response => {
      const copyBytes = [...bytes];
      const byte = copyBytes.find(copyByte => parseInt(copyByte.id, 10) === parseInt(id, 10));
      byte.attributes.content = response.data.data.attributes.content;
      setBytes([...copyBytes]);
      setEditMode(false);
    })
    .catch(error => console.log(error))
  };

  return (
    <div className='px-4 py-2 border-bottom'>
      {editMode
        ? <MDEditor
            value={input}
            onChange={setInput}
            preview={'edit'}
            commands={[commands.bold, commands.italic, commands.code]}
          />
        : <MDEditor.Markdown source={byte.attributes.content} />
      }
      <div className='d-flex align-items-center mt-2 justify-between'>
        <div className='d-flex align-items-center' >
          <img onClick={() => handleAddVote(byte.id)} className='w-4 mr-1' src={BrainWhite} alt="Brain" />
          <span>{byte.attributes.vote_count}</span>
        </div>
        <div className='d-flex align-items-center' >
          {editMode && <img className='w-4 ml-2' src={Save} onClick={() => handleSave(byte.id)} />}
          {isAuthor
            ? <img className='w-4 ml-2' src={Pen} onClick={() => setEditMode(!editMode)} />
            : <span className='text-xs font-weight-light'>by {byte.attributes.author}</span>
          }
        </div>
      </div>
    </div>
  )
};

export default Byte;
