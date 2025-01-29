import React, { useState, useEffect } from "react";

const projects = [
  {
    title: "TechTextile",
    description: "TechTextile is an innovative B2B and B2C e-commerce platform specializing in yarn and fabric products. Our mission is to bridge the gap between Indian textile manufacturers and North American buyers, leveraging the substantial import market and facilitating global trade.",
    techStack:"JavaScript, React, NodeJS, NextJS, Neon Database, PostgreSQL, Firebase, Figma, Git, GitHub, TailwindCSS",
    link: "https://techtextile.vercel.app/",
    images: ["/images/TT.png"],
  },
  {
    title: "Healthy Eats",
    description:"A web application designed to create personalized meal plans that cater to your body's needs, not just your cravings.",
    techStack: "JavaScript, React, NodeJS, NextJS, Firebase, Figma, Git, GitHub, TailwindCSS",
    link: "https://healthyeats.vercel.app/",
    images: ["/images/HE.png"],
  },
  {
    title: 'Tactical Tic Tac Toe',
    description: 'A Mobile Game Application that allows the user to play Tic Tac Toe with a twist. The game is played on a 3x3 grid, but the player can only win by getting 3 in a row on the 3x3 grid they are playing on.',
    techStack: 'React Native, JavaScript, React Native Async Storage, Figma, Git, GitHub',
    link: 'https://github.com/MeetGodad/TacTical-TicTacToe',
    images: ['/images/TTT.png'], // Multiple images for Tactical Tic Tac Toe
  },
  {
    title: 'Figma Design Project',
    description: 'A design project created in Figma.',
    link: 'https://www.figma.com/files/team/1263589982534203979/recents-and-sharing/recently-viewed?fuid=1263589980779324279',
    images: ['/images/Figma1.png'], // Multiple images for Figma Design Project
  },
  {
    title: 'Calgary Hospital Management System',
    description: 'Developed a scalable healthcare platform using C# .NET MAUI Blazor and MySQL. The system includes advanced search functionality, efficient CRUD operations, and an intuitive UI, improving data management and workflow. Collaborated with teams to create a robust solution, with detailed documentation for smooth adoption.',
    techStack: 'C# .NET MAUI Blazor, MySQL',
    link: 'https://github.com/yashhingu2403/Hospital-Management-System',
    images: ['/images/HMS.png'], // Multiple images for Calgary Hospital Management System
  },
];

const ProjectsSection = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) =>
        (prevIndex + 1) % projects.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentProjectIndex((prevIndex) =>
      (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-gradient-to-r from-purple-100 via-blue-100 to-slate-100 text-gray-900 py-12 overflow-hidden  flex flex-col items-center"
    >
      <h2 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-pulse">
        MY PROJECTS
      </h2>

      {/* Project Display */}
      <div className="relative w-11/12 md:w-4.5/5 md:h-4.5/5 max-h-[600px] rounded-lg overflow-hidden shadow-lg mx-auto">
        <a
          href={currentProject.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src={currentProject.images[0]}
            alt={currentProject.title}
            className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </a>
      </div>
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-lg text-black p-4 rounded-full shadow-lg transition-all duration-300 hover:bg-white/40 hover:scale-110 border-1 border-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-lg text-black p-4 rounded-full shadow-lg transition-all duration-300 hover:bg-white/40 hover:scale-110 border-1 border-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      {/* Project Details */}
      <div className="text-center mt-8 w-4/5 md:w-3/5 lg:w-1/2">
        <h3 className="text-3xl font-bold">{currentProject.title}</h3>
        <p className="text-lg mt-4">{currentProject.description}</p>
        <p className="text-sm text-gray-600 mt-2">
          <strong>Tech Stack:</strong> {currentProject.techStack}
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
