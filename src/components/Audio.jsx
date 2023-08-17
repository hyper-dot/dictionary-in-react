'use client';
import React, { useState, useRef } from 'react';
import PlayBtn from './AudioControls/PlayBtn';
import PauseBtn from './AudioControls/PauseBtn';

function AudioPlayer({ audioUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.load();
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div>
      <button className='outline-none' onClick={toggleAudio}>
        {isPlaying ? <PauseBtn /> : <PlayBtn />}
      </button>
      <audio ref={audioRef} controls={false} onEnded={handleAudioEnd}>
        <source src={audioUrl} type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AudioPlayer;
