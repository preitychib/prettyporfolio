"use client";
import { useHandleScroll } from '../../utils/handleScroll';

export default function EducationPage() {
  const handleScroll = useHandleScroll('/education');
    return (
      <div onWheel={handleScroll}>
        <img
          src="/page3.png"
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
      </div>
    );
  }