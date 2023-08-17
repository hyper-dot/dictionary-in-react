'use client';
import { createContext, useState } from 'react';

export const MeaningContext = createContext();

export const MeaningProvider = ({ children }) => {
  const [data, setData] = useState();

  function handleSearch(e) {
    e.preventDefault();
    const query = e.target[0].value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`) // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <MeaningContext.Provider
      value={{
        handleSearch,
        data,
      }}
    >
      {children}
    </MeaningContext.Provider>
  );
};
