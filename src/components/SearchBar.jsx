'use client';
import React, { useState, useContext } from 'react';
import { MeaningContext } from '@/context/MeaningsContext';
import { BsSearch } from 'react-icons/bs';
import { Vazirmatn } from 'next/font/google';
const vazirmatn = Vazirmatn({ subsets: ['latin'] });

const SearchBar = ({ placeholder }) => {
  const { handleSearch } = useContext(MeaningContext);
  return (
    <div className='bg-gray-100 flex items-center gap-4 rounded-md p-4 border border-gray-300'>
      <div>
        <BsSearch />
      </div>
      <form className='w-full' onSubmit={handleSearch}>
        <input
          className={`bg-transparent ${vazirmatn.className} w-full  outline-none`}
          placeholder={placeholder}
        />
      </form>
    </div>
  );
};

export default SearchBar;
