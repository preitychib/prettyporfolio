"use client";
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState('/home1.png');

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth < 768) {
        setBackgroundImage('/page3.png');
      } else {
        setBackgroundImage('/home1.png'); 
      }
    };

    updateBackground();
    window.addEventListener('resize', updateBackground);
    return () => window.removeEventListener('resize', updateBackground);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
      src="side1.png"
      alt="Overlay Background"
      className="absolute top-[-10] left-0 w-full h-auto z-10 md:hidden"
    />
      <img
        src={backgroundImage}
        alt="Overlay Background"
        className="absolute top-0 left-0 w-full h-full z-10"
      />
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-auto px-5 md:px-10 py-5">
        <h1 className="font-subtitle text-black text-[clamp(2rem,8vw,6rem)] mt-4 text-center">
          Hello, I&apos;m
        </h1>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[90%] md:w-auto px-5 md:px-10 py-5">
        <div className="relative w-full md:w-auto inline-block">
          <div className="relative">
            <img
              src="/nametag.png"
              alt="Nametag Background"
              className="block w-full h-full object-contain -rotate-1"
            />
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-0 px-5 text-[clamp(3rem,8vw,8rem)] md:text-[clamp(4rem,10vw,8rem)] font-title text-black tracking-widest flex gap-[0.1em] whitespace-nowrap">
             Preeti
      </h1>
    </div>
  </div>
</div>

    </div>
  );
};

export default Home;
