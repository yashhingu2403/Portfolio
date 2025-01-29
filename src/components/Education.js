import React, { useState } from 'react';

const Education = () => {
  const [hoveredCertificate, setHoveredCertificate] = useState(null);

  const certificates = [
    {
      name: 'AWS Cloud Technical Essentials',
      date: '09 January 2024',
      image: 'AWS_CLOUD_TECHNICAL_ESSENTIALS_page-0001.jpg',
      link: 'https://www.coursera.org/account/accomplishments/verify/XOSM9SPOFWU7',
    },   
    {
      name: 'Preparation for CompTIA A+ Certification',
      date: '05 December2024',
      image: 'COMP TIA A+_page-0001.jpg',
      link: 'https://www.coursera.org/account/accomplishments/specialization/Z2EZ93AKXCVI',
    },  
    {
      name: 'Complete C# .NET course on Udemy',
      date: '23 August 2024',
      image: 'UC-b523a647-9c34-485d-94bb-e424e153bb15.jpg',
      link: 'https://www.udemy.com/certificate/UC-b523a647-9c34-485d-94bb-e424e153bb15/',
    },
    {
      name: 'Git Essential Training: The Basics (2019)',
      date: '27 April 2023',
      image: 'Git Essential Traning.jpeg',
      link: 'https://www.linkedin.com/learning/certificates/613a7a7615449357a131a1d19c29db72059be233877cc56650be1e0c1a6beefc?trk=share_certificate',
    },
    {
      name: 'Agile Testing',
      date: '23 August 2024',
      image: 'Agile testing.jpeg',
      link: 'https://www.linkedin.com/learning/certificates/4c48e48d8fe872fe3286eb42e1db55a89de204faf02483aa9ae4e80af3c1a2f3?trk=share_certificate',
    },
    {
      name: 'Introduction to Structured Query Language (SQL)',
      date: '14 November 2022',
      image: 'IToSQL_page-0001.jpg',
      link: 'https://www.coursera.org/account/accomplishments/verify/XHXRWDL3A8D6',
    },
  ];

  return (
    <section
      id="education"
      className="py-10 bg-gradient-to-r from-blue-100 via-indigo-100 to-gray-100 text-gray-900"
    >
      <div className="container mx-auto px-8">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-pulse">
          Education
        </h2>

        {/* Education Details */}
        <div className="space-y-10">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-3xl font-bold text-gradient-to-r from-purple-500 to-pink-500 mb-2">
              Southern Alberta Institute of Technology (SAIT)
            </h3>
            <p className="text-lg text-gray-600">
              Diploma in Information Technology - Software Development
            </p>
            <p className="text-gray-500">Graduation: August 2024</p>
          </div>

          {/* Certificates Section */}
          <h2 className="text-4xl font-bold text-center text-gradient-to-r from-blue-500 to-teal-500 mb-8">
            Certificates
          </h2>

          {/* Certificates List */}
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex justify-between items-center"
              onMouseEnter={() => setHoveredCertificate(certificate.image)}
              onMouseLeave={() => setHoveredCertificate(null)}
            >
              {/* Certificate Name */}
              <div className="text-left">
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-blue-600 hover:text-blue-800"
                >
                  {certificate.name}
                </a>
              </div>

              {/* Certificate Date */}
              <span className="text-gray-500">{certificate.date}</span>

              {/* Hover Preview */}
              {hoveredCertificate === certificate.image && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-flex h-96 z-50">
                  <img
                    src={`/${certificate.image}`}
                    alt="Certificate"
                    className="w-full h-full object-cover border border-gray-300 shadow-lg rounded-md"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
