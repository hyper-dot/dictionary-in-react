'use client';
import React, { createContext, useState, useEffect } from 'react';

export const MeaningContext = createContext();

export const MeaningProvider = ({ children }) => {
  const [data, setData] = useState(null); // Initialize data as null
  const [audio, setAudio] = useState('');

  const [selectedPartOfSpeech, setSelectedPartOfSpeech] = useState(null); // Initialize as null
  const [allPartsOfSpeech, setAllPartsOfSpeech] = useState([]);
  const [displayMeaning, setDisplayMeaning] = useState(null);

  useEffect(() => {
    if (data) {
      // Extract Parts of Speech
      const partsOfSpeech = data[0].meanings.map((item) => item.partOfSpeech);

      setSelectedPartOfSpeech(partsOfSpeech[0]);
      setAllPartsOfSpeech(partsOfSpeech);

      // Get meanings from selected parts of speech
      const meanings = data[0].meanings.filter(
        (item) => item.partOfSpeech === selectedPartOfSpeech,
      );

      setDisplayMeaning(meanings[0]);
    }
  }, [data, selectedPartOfSpeech]);

  function handleSearch(e) {
    e.preventDefault();
    const query = e.target[0].value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setAudio(data[0].phonetics[1].audio);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <MeaningContext.Provider
      value={{
        handleSearch,
        data,
        allPartsOfSpeech,
        displayMeaning,
        audio,
      }}
    >
      {children}
    </MeaningContext.Provider>
  );
};
