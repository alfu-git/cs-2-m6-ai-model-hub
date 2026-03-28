import { X } from 'lucide-react';
import React from 'react';

const List = ({list}) => {
  console.log(list);

  return (
    <div className='p-3 bg-zinc-100 border border-zinc-300 hover:border-red-600/50 rounded-3xl '>
      <div className='flex justify-between items-center gap-5'>

        <div className='flex gap-4 items-center'>
          <div className='p-3 bg-base-100 rounded-2xl flex items-center justify-center'>
            <img className='w-20' src={list.image} />
          </div>

          <div>
            <h5 className='text-2xl font-semibold'>{list.title}</h5>
            <p className='mt-1 max-w-120 text-zinc-400 text-sm'>{list.description}</p>
          </div>
        </div>

        <div className='flex justify-between items-center gap-6'>
          <div className='flex flex-col items-center'>
            <span className='text-3xl font-bold'>${list.price}</span>
            <span className='text-zinc-500 text-sm'>per month</span>
          </div>

          <button className='btn p-0 bg-zinc-100 border-none shadow-none hover:shadow-none text-zinc-500 hover:text-red-500'>
            <X />
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;