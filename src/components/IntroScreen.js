import React, { useEffect, useState } from 'react';

const IntroScreen = ({ onAnimationEnd }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [textMove, setTextMove] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextMove(true); // Move the text up after 3 seconds
      setTimeout(() => {
        setFadeOut(true); // Fade out the background after moving the text
        setTimeout(() => {
          onAnimationEnd(); // Notify parent that animation is done
        }, 1000); // Time for the fade-out
      }, 1000); // Time for the text to move
    }, 1500); // Initial wait time

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <h1
        className={`text-white text-4xl transition-transform duration-1000 ${textMove ? 'transform -translate-y-[30vh]' : ''}`}
        style={{
          fontFamily: "'Italianno', cursive", // Applying the Italianno font
          fontSize: '7rem', // You can adjust the size as needed
          letterSpacing: '0.1rem',
        }}>
        Yash R Hingu
      </h1>
    </div>
  );
};

export default IntroScreen;
