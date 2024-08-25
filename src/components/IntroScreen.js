import React, { useEffect, useState } from 'react';

const IntroScreen = ({ onAnimationEnd }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Incrementally increase the loading bar's progress
    const loadingInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev < 100) {
          return prev + 1; // Increase progress by 1% every 30ms
        } else {
          clearInterval(loadingInterval);
          return prev;
        }
      });
    }, 30); // Adjust the interval to control the speed of the loading

    // Fade out the intro screen after the loading is complete
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onAnimationEnd(); // Notify parent that animation is done
      }, 1000); // Time for the fade-out
    }, 3500); // Total time before fading out (Loading time + delay)

    return () => {
      clearInterval(loadingInterval);
      clearTimeout(timer);
    };
  }, [onAnimationEnd]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center z-50 bg-gray-900 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <h1
        className="text-white text-4xl"
        style={{
          fontFamily: "'Italianno', cursive", // Applying the Italianno font
          fontSize: '7rem', // You can adjust the size as needed
          letterSpacing: '0.1rem',
          marginBottom: '2rem',
        }}
      >
        Yash R Hingu
      </h1>
      <div
        className="w-full h-1 bg-gray-700"
        style={{
          maxWidth: '1000px', // Adjust the width of the loading bar container
          height: '10px', // Increase the height of the loading bar
          position: 'absolute',
          bottom: '3rem', // Position the bar closer to the bottom of the page
          overflow: 'hidden',
        }}
      >
        <div
          className="bg-white h-full transition-all"
          style={{
            width: `${loadingProgress}%`,
            transitionDuration: '10ms', // Smooth transition for each step
          }}
        ></div>
      </div>
    </div>
  );
};

export default IntroScreen;
