"use client";
import React, { useState, useEffect } from "react";

export default function AboutPage() {
  const [backgroundImage, setBackgroundImage] = useState("/page1.png");

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth < 768) {
        setBackgroundImage("/page3.png"); 
      } else {
        setBackgroundImage("/page1.png"); 
      }
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden flex justify-center items-center p-5">
      <img
        src={backgroundImage}
        alt="Overlay Background"
        className="absolute top-0 left-0 w-full h-full z-10"
      />

      <div className="relative z-20 w-full max-w-5xl flex flex-col md:flex-row justify-between items-start gap-5">
        <div className="flex-1 p-5">
          <h1 className="font-bold mb-2 font-title text-[clamp(1.5rem,6vw,4rem)]">
            About Me
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-6">
            I am a computer science student with a strong foundation in
            full-stack development. My passion lies in exploring diverse fields
            such as cloud computing, AI/ML, and DevOps, as I find each domain
            fascinating in its own way. However, my expertise and primary focus
            are in backend development, where I excel at building robust and
            scalable systems. With professional experience in Java, JavaScript,
            and Python, I enjoy solving complex challenges and continuously
            strive to enhance my skills across the tech stack.
          </p>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <img
            src="/aboutme.png"
            alt="About Me Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
