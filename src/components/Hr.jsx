import React from 'react';

function Hr({ text }) {
  return (
    <div className='relative flex items-center'>
      <p className='text-2xl font-bold flex-1 text-center p-5'>
        {text}
      </p>
      <hr className='absolute inset-x-0 bottom-0 border-sky-500 border w-20 mx-auto' />
    </div>
  );
}

export default Hr;
