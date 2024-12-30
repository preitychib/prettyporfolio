"use client";
import React, { useEffect, useState } from 'react';
import { useHandleScroll } from '../utils/handleScroll';

const Home: React.FC = () => {
  const handleScroll = useHandleScroll('/');

  return (
    <div onWheel={handleScroll}>
        <img
          src="/home1.png"
          alt="Overlay Background"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            zIndex: 11,
          }}
      />
      
      <img
          src="/nametag.png"
          alt="Tittle background"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '70vw',
            height: 'auto',
          }}
        />
      </div>
  );
  
  
};

export default Home;
