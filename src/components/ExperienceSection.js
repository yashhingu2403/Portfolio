import React from "react";

const ExperienceSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      {/* Professional Experience Section */}
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-6">Professional Experience</h2>

        {/* Keshav Software Solution */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-10">
          <h3 className="text-2xl font-semibold mb-2">Keshav Software Solution</h3>
          <p className="text-gray-600 text-sm mb-4">Role: Software Developer</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Developed and maintained client-side and server-side applications.</li>
            <li>Worked extensively with C#, .NET, and MySQL for building scalable solutions.</li>
            <li>Played a key role in implementing features and resolving critical bugs.</li>
            <li>Collaborated with cross-functional teams to deliver high-quality software on time.</li>
            <li>Provided technical support and conducted code reviews to ensure best practices.</li>
          </ul>
        </div>

        {/* Additional Experience Section */}
        <h2 className="text-4xl font-bold text-center mb-6">Additional Experience Highlights</h2>
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
