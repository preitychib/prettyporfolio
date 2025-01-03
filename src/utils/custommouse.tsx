'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faArrowPointer } from '@fortawesome/free-solid-svg-icons';

interface CursorWrapperProps {
  children: ReactNode;
  routes: string[];
}

export default function CursorWrapper({ children, routes }: CursorWrapperProps) {
  const router = useRouter();
  const [cursorState, setCursorState] = useState<'normal' | 'up' | 'down'>('normal');
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [startY, setStartY] = useState<number | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    });
  }, []);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();

    const currentPath = window.location.pathname;
    const currentIndex = routes.indexOf(currentPath);

    if (currentIndex === -1) {
      console.warn('Current path not found in routes array');
      return;
    }

    if (e.deltaY > 0) {
      setCursorState('down');
      const nextIndex = (currentIndex + 1) % routes.length;
      router.push(routes[nextIndex]);
    } else {
      if (currentIndex === 0) return;
      setCursorState('up');
      const prevIndex = (currentIndex - 1 + routes.length) % routes.length;
      router.push(routes[prevIndex]);
    }

    setTimeout(() => setCursorState('normal'), 500);
  }, [routes, router]);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    setStartY(e.touches[0].clientY);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (startY === null) return;

      const deltaY = e.touches[0].clientY - startY;
      const currentPath = window.location.pathname;
      const currentIndex = routes.indexOf(currentPath);

      if (currentIndex === -1) {
        console.warn('Current path not found in routes array');
        return;
      }

      if (deltaY < -50) {
        // Swipe up
        setCursorState('down');
        const nextIndex = (currentIndex + 1) % routes.length;
        router.push(routes[nextIndex]);
        setStartY(null);
      } else if (deltaY > 50) {
        // Swipe down
        if (currentIndex === 0) return;
        setCursorState('up');
        const prevIndex = (currentIndex - 1 + routes.length) % routes.length;
        router.push(routes[prevIndex]);
        setStartY(null);
      }

      setTimeout(() => setCursorState('normal'), 500);
    },
    [routes, router, startY]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleMouseMove, handleWheel, handleTouchStart, handleTouchMove]);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return children;
  }

  return (
    <>
      <div
        style={{
          position: 'fixed',
          left: cursorPosition.x,
          top: cursorPosition.y,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          willChange: 'transform',
          transition: 'opacity 0.2s ease-out',
        }}
      >
        {cursorState === 'normal' && (
          <FontAwesomeIcon icon={faArrowPointer} style={{ fontSize: '1.25rem' }} />
        )}
        {cursorState === 'up' && (
          <FontAwesomeIcon icon={faChevronUp} style={{ fontSize: '1.25rem' }} />
        )}
        {cursorState === 'down' && (
          <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '1.25rem' }} />
        )}
      </div>

      <style jsx global>{`
        * {
          cursor: none !important;
        }

        body {
          overflow: hidden;
        }
      `}</style>

      {children}
    </>
  );
}
