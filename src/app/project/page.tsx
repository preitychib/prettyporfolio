"use client";
import { useHandleScroll } from '../../utils/handleScroll';
export default function AboutPage() {

  // const handleScroll = useHandleScroll('/education');
  return (
    <div>
    {/* <div onWheel={handleScroll}> */}
        <img
          src="/page2.png"
          alt="Overlay Background"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100vw',
            height: '80vh',
            zIndex: 11,
          }}
        />
      </div>
    );
  }