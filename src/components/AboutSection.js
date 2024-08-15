import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const AboutSection = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-purple-100 via-blue-100 to-slate-100 top-2 text-gray-900 py-8 relative overflow-hidden ">
      {/* 3D Animation Background */}
      <Canvas className="absolute inset-0">
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} />
      </Canvas>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center items-center">
        <h2 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r top-0 from-blue-500 to-teal-400 animate-pulse">
          About Me
        </h2>
        <p className="text-lg mb-4 text-slate-800 font-semibold leading-relaxed transition-all duration-500 ease-in-out transform hover:scale-105">
          I am a <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">passionate</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">innovative</span> software developer with a deep love for building modern, responsive, and user-friendly websites and applications.
        </p>
        <p className="text-lg text-slate-800 font-semibold leading-relaxed transition-all duration-500 ease-in-out transform hover:scale-105">
          My journey in the tech world is driven by a constant desire to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">learn</span> and adapt to new technologies. I thrive in dynamic environments where I can create and implement solutions that make a difference.
        </p>

        {/* Technologies Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4 mt-8 justify-items-center">
          {[
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg", title: "React" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg", title: "NextJS" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg", title: "Firebase" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain-wordmark.svg", title: "TailwindCSS" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg", title: "Java" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg", title: "Python" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", title: "C#" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", title: "JavaScript" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg", title: "CSS3" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg", title: "HTML5" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg", title: "NodeJS" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg", title: "MongoDB" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg", title: "Express" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg", title: "Git" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg", title: "GitHub" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg", title: "Bootstrap" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", title: "Figma" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg", title: ".NET" }
          ].map((tech, index) => (
            <div key={index} className="p-2">
              <img src={tech.src} alt={`The logo icon for ${tech.title}`} title={tech.title} className="w-20 h-20 md:w-24 md:h-24 transition-transform duration-500 ease-in-out transform hover:scale-110 mb-5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
