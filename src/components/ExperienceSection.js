import React from "react";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="bg-gradient-to-r from-blue-100 via-indigo-100 to-gray-100 text-gray-900 py-8 relative"
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-pulse">
          Experience
        </h2>

        {/* Software Developer Role */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-left text-gradient-to-r from-purple-500 to-pink-500 mb-2">
            Software Developer – Keshav Software Solutions
          </h3>
          <p className="text-md text-gray-600 text-left mb-4">Jan 2024 – Present | Calgary, AB</p>
          <p className="text-lg text-left text-slate-800 font-semibold leading-relaxed">
            Promoted to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Software Developer</span>, taking on more responsibilities in designing and deploying <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">innovative digital solutions</span>. Spearheaded scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">cloud migration projects</span> and collaborated with cross-functional teams to deliver seamless eCommerce solutions. Continued providing <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">technical support</span> and troubleshooting client issues to maintain exceptional service standards.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 my-8"></div>

        {/* Software Developer Internship */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-left text-gradient-to-r from-orange-500 to-yellow-500 mb-2">
            Software Developer Internship – Keshav Software Solutions
          </h3>
          <p className="text-md text-gray-600 text-left mb-4">Sep 2023 – Dec 2023 | Calgary, AB</p>
          <p className="text-lg text-left text-slate-800 font-semibold leading-relaxed">
            Contributed to developing, maintaining, and enhancing innovative digital solutions. Assisted in the development of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">custom software</span> tailored to client requirements, leveraging technologies like C#, JavaScript, and SQL. Collaborated with teams to build <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">responsive applications</span> and participated in code reviews to enhance performance.
          </p>
          <p className="text-lg text-left text-slate-800 font-semibold leading-relaxed mt-4">
            Provided <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">technical support</span> for eCommerce platforms, resolved hosting configuration issues, and documented client inquiries to improve knowledge-sharing efficiency.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 my-8"></div>

        {/* Skills Gained */}
        <div>
          <h3 className="text-3xl font-bold text-left text-gradient-to-r from-blue-500 to-teal-500 mb-2">
            Skills Acquired
          </h3>
          <p className="text-lg text-left text-slate-800 font-semibold leading-relaxed">
            Developed skills in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">programming</span> (C#, JavaScript, SQL), <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">web development</span> (HTML, CSS, responsive design, UI/UX principles), and <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">technical support</span>. Hands-on experience with tools like Visual Studio, Azure, and Git, and enhanced troubleshooting abilities.
          </p>
        </div>
        {/* Additional Experience Section */}
        <h2 className="text-4xl font-bold text-center mt-10 mb-10 text-current bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-pulse">
          Additional Experience Highlights
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-lg rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <ul className="list-disc pl-5">
              <li>Designed and developed responsive user interfaces using React and Next.js.</li>
              <li>Proficient in creating reusable components with Tailwind CSS.</li>
              <li>Worked on dynamic and visually attractive UI designs for multiple projects.</li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-400 to-teal-500 text-white shadow-lg rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <ul className="list-disc pl-5">
              <li>Developed RESTful APIs using Node.js and Express.</li>
              <li>Experience working with serverless databases like Neon.</li>
              <li>Integrated secure authentication and data management workflows.</li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-r from-green-400 to-teal-500 text-white shadow-lg rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <ul className="list-disc pl-5">
              <li>Crafted user-friendly designs emphasizing accessibility and usability.</li>
              <li>Utilized tools like Figma to create interactive prototypes and wireframes.</li>
              <li>Collaborated with clients to refine and enhance visual aesthetics.</li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
            <ul className="list-disc pl-5">
              <li>Worked with cross-functional teams in Agile environments.</li>
              <li>Effectively managed projects with tools like Jira and Trello.</li>
              <li>Mentored junior developers and conducted code reviews.</li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-r from-pink-400 to-red-500 text-white shadow-lg rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Full-Stack Projects</h3>
            <ul className="list-disc pl-5">
              <li>Built end-to-end applications with seamless frontend-backend integration.</li>
              <li>Specialized in e-commerce and content management systems.</li>
              <li>Ensured optimization for high performance and scalability.</li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-r from-indigo-400 to-purple-500 text-white shadow-lg rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
            <ul className="list-disc pl-5">
              <li>Explored modern frameworks and technologies like Blazor and C#.</li>
              <li>Committed to enhancing skills through professional courses and certifications.</li>
              <li>Stay updated with the latest trends in software development and design.</li>
            </ul>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ExperienceSection;
