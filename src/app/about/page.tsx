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
    <div className="relative w-screen h-screen overflow-hidden flex justify-center items-center p-8">
      {/* Background Images */}
      {/* <img
        src="side2.png"
        alt="Overlay Background"
        className="absolute top-[-10] left-0 w-full h-auto z-10 md:hidden"
      /> */}
      <img
        src={backgroundImage}
        alt="Overlay Background"
        className="absolute top-0 left-0 w-full h-full z-10"
      />

      {/* Content Container */}
      <div className="relative  z-20 w-full max-w-7xl flex flex-col md:flex-row justify-between items-start gap-1 ">
        {/* Text Section */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="font-bold font-title text-black text-[clamp(4rem,8vw,6rem)] text-left leading-tight">
            About Me
          </h1>
          <p className="text-sm md:text-xl text-gray-600 leading-8 text-left font-body">
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

        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/aboutme.png"
            alt="About Me Illustration"
            className="w-64 sm:w-40 md:w-[300px] lg:w-[600px] h-auto md:order-last order-first"
          />
        </div>
      </div>
    </div>
  );
}
