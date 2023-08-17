'use client';
import React, { useState, useContext } from 'react';
import { MeaningContext } from '@/context/MeaningsContext';
import SearchBar from '@/components/SearchBar';
import { BsSearch } from 'react-icons/bs';
import MeaningDisplay from '@/components/MeaningDisplay';

const page = () => {
  const { data } = useContext(MeaningContext);
  return (
    <>
      <SearchBar placeholder={'Search...'} />
      <div className='mt-4 p-5 border-2 border-gray-300 pb-20 rounded-2xl'>
        {data ? (
          <MeaningDisplay data={data} />
        ) : (
          <>
            <div className='text-gray-400 flex justify-center items-center h-full gap-4'>
              <span className='text-3xl font-bold'>
                <BsSearch />
              </span>{' '}
              <span className='text-gray-300 font-bold text-3xl'>
                Search it on the dictionary
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default page;
