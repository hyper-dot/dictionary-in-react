'use client';
import React, { useState, useContext } from 'react';
import { MeaningContext } from '@/context/MeaningsContext';
import AudioPlayer from './Audio';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const MeaningDisplay = () => {
  const { data, displayMeaning, allPartsOfSpeech } = useContext(MeaningContext);

  return (
    <>
      <div className='flex items-center gap-4'>
        <AudioPlayer audioUrl={data[0].phonetics[1].audio} />
        <p>{data[0].phonetic}</p>
      </div>

      <div>
        {allPartsOfSpeech.map((p) => (
          <button className='text-black m-2 px-5 rounded-md outline-none bg-gray-300'>
            {p}
          </button>
        ))}
      </div>
      <ol className='list-decimal px-5'>
        {displayMeaning
          ? displayMeaning.definitions.map((d, i) => (
              <li key={i} className={`px-2 ${inter.className}`}>
                {d.definition}
              </li>
            ))
          : ''}
      </ol>
    </>
  );
};

export default MeaningDisplay;
