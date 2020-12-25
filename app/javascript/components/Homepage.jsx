import React from 'react';
import Input from './Input';

const Homepage = () => {

  return (
    <div 
      className='vh-100 d-flex flex-col justify-content-center align-items-center'
    >
      <header className='w-100 border-bottom border-blue-900'>
        <h1 className='p-3 text-center'>Brain Bytes</h1>
      </header>
      
      <div className='w-100 overflow-scroll'>

        <div className='p-2 border-top border-bottom'>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est</p>
        </div>

        <div className='p-2 border-top border-bottom'>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est</p>
        </div>

        <div className='p-2 border-top border-bottom'>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est</p>
        </div>

      </div>

      <div 
        className='absolute bottom-5 right-5 border border-blue-700 bg-blue-100 p-2 rounded-2xl'
        onClick={() => console.log('add brain byte')}
      >
        BRAIN
      </div>

    </div>
  )
};

export default Homepage;