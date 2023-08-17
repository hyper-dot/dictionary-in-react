'use client';
import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Logo from '../../public/logo.png';
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

      <div className='mt-10 h-40'>
        <Image
          width={150}
          height={150}
          className='hidden absolute z-10 left-64 md:block'
          src={Logo}
          alt='subhaye logo'
        />
        <div className='bg-sky-400 h-full transform -rotate-2 -skew-y-1 rounded-3xl relative flex flex-col justify-center items-end px-20  '>
          <h1>Subhaye.Official</h1>
          <p>Follow us On twitter</p>
        </div>
      </div>
    </>
  );
};

export default page;
