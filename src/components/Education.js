import React, { useState } from 'react';

const Education = () => {
  const [hoveredCertificate, setHoveredCertificate] = useState(null);

  const certificates = [
    {
      name: 'Complete C# .NET course on Udemy',
      date: '23 August 2024',
      image: 'UC-b523a647-9c34-485d-94bb-e424e153bb15.jpg"',
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
  ];

  return (
    <section id="education" className="py-10 bg-white">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Southern Alberta Institute of Technology (SAIT)</h3>
            <p className="text-gray-600">Diploma in Information Technology - Software Development</p>
            <p className="text-gray-500">Graduation: August 2024</p>
          </div>
          <h2 className="text-2xl font-bold mb-6">Certificates</h2>

          {certificates.map((certificate, index) => (
            <div 
              key={index} 
              className="flex justify-between text-xl font-semibold relative"
              onMouseEnter={() => setHoveredCertificate(certificate.image)}
              onMouseLeave={() => setHoveredCertificate(null)}
            >
              <span className="relative">
                <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                  {certificate.name}
                </a>
                {hoveredCertificate === certificate.image && (
                  <div className="absolute left-0 mt-2 w-96 h-96 z-50">
                    <img 
                      src={`/${certificate.image}`} 
                      alt="Certificate" 
                      className="w-full h-full object-cover border border-gray-300 shadow-lg z-50" 
                    />
                  </div>
                )}
              </span>
              <span>{certificate.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;