import React, { useState } from 'react';
import axios from 'axios';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('http://localhost:5000/api/contact', formData); // Update URL if your backend server URL is different
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Get In Touch
        </h2>
        <form className="max-w-lg mx-auto bg-white rounded-lg shadow-2xl p-8" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-800 text-lg font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-300"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 text-lg font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-transparent transition ease-in-out duration-300"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 text-lg font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full h-32 px-4 py-2 border rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-transparent transition ease-in-out duration-300"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />
          </div>
          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out" type="submit">
              Send Message
            </button>
          </div>
          {submitted && (
            <div className="mt-6 text-center text-green-500 text-lg font-semibold">
              Thank you for your message! I'll get back to you soon.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
