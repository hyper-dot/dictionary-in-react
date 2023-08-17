'use client';
import React, { useState, useContext } from 'react';
import { MeaningContext } from '@/context/MeaningsContext';
import AudioPlayer from './Audio';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const MeaningDisplay = () => {
  const { data } = useContext(MeaningContext);

  // Extract Parts of Speech
  const partsOfSpeech = data[0].meanings.map((item) => item.partOfSpeech);

  // Select parts of speech
  const [selectedPartOfSpeech, setSelectedPartOfSpeech] = useState(
    partsOfSpeech[0],
  );

  // All parts of speech
  const [allPartsOfSpeech, setAllPartsOfSpeech] = useState(partsOfSpeech);

  // Get meanings from selected parts of speech
  const meanings = data[0].meanings.filter(
    (item) => (item.partOfSpeech = selectedPartOfSpeech),
  );

  // meanings to display
  const [displayMeaning, setDisplayMeaning] = useState(meanings[0]);

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
        {data
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
