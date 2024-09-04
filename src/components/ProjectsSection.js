import React, { useState, useEffect } from 'react';

// Update this array with your project details, including multiple images for each project
const projects = [
  {
    title: 'Healthy Eats',
    description: "A web application designed to create personalized meal plans that cater to your body's needs, not just your cravings.",
    techStack: 'JavaScript, React, NodeJS, NextJS, Firebase, Figma, Git, GitHub, TailwindCSS',
    link: 'https://healthyeats.vercel.app/',
    images: ['/images/HE.png', '/images/HE2.png', '/images/HE3.png','/images/HE4.png'], // Multiple images for Healthy Eats
  },
  {
    title: 'Tactical Tic Tac Toe',
    description: 'A Mobile Game Application that allows the user to play Tic Tac Toe with a twist. The game is played on a 3x3 grid, but the player can only win by getting 3 in a row on the 3x3 grid they are playing on.',
    techStack: 'React Native, JavaScript, React Native Async Storage, Figma, Git, GitHub',
    link: 'https://github.com/MeetGodad/TacTical-TicTacToe',
    images: ['/images/TTT.png', '/images/TTT2.png', '/images/TTT3.png'], // Multiple images for Tactical Tic Tac Toe
  },
  {
    title: 'TechTextile',
    description: 'TechTextile is an innovative B2B and B2C e-commerce platform specializing in yarn and fabric products. Our mission is to bridge the gap between Indian textile manufacturers and North American buyers, leveraging the substantial import market and facilitating global trade.',
    techStack: 'JavaScript, React, NodeJS, NextJS, Neon Database, PostgreSQL, Firebase, Figma, Git, GitHub, TailwindCSS',
    link: 'https://techtextile.vercel.app/',
    images: ['/images/TT.png', '/images/TT2.png', '/images/TT3.png', '/images/TT4.png', '/images/TT5.png', '/images/TT6.png', '/images/TT7.png', '/images/TT8.png'], // Multiple images for TechTextile
  },
  {
    title: 'Figma Design Project',
    description: 'A design project created in Figma.',
    link: 'https://www.figma.com/files/team/1263589982534203979/recents-and-sharing/recently-viewed?fuid=1263589980779324279',
    images: ['/images/Figma1.png', '/images/Figma2.png', '/images/Figma3.png', '/images/Figma4.png', '/images/Figma5.png', '/images/Figma6.png'], // Multiple images for Figma Design Project
  },
  {
    title: 'Calgary Hospital Management System',
    description: 'Developed a scalable healthcare platform using C# .NET MAUI Blazor and MySQL. The system includes advanced search functionality, efficient CRUD operations, and an intuitive UI, improving data management and workflow. Collaborated with teams to create a robust solution, with detailed documentation for smooth adoption.',
    techStack: 'C# .NET MAUI Blazor, MySQL',
    link: 'https://techtextile.vercel.app/',
    images: ['/images/HMS.png', '/images/HMS2.png', '/images/HMS3.png', '/images/HMS4.png', '/images/HMS6.png', '/images/HMS7.png'], // Multiple images for Calgary Hospital Management System
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 3000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="relative h-48 bg-gray-200">
        <img
          src={project.images[currentImageIndex]}
          alt={`${project.title} Screenshot`}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <p className="text-sm text-gray-500 mb-4">Tech Stack: {project.techStack}</p>
        <div className="flex justify-end">
          {project.link !== '#' ? (
            <a
              href={project.link}
              className="text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-2 px-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          ) : (
            <span className="text-gray-500">Coming Soon</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
