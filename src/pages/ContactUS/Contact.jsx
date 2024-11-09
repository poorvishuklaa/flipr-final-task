import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.query && formData.message) {
      setSubmitted(true);
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', query: '', message: '' });
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-center text-lg font-semibold tracking-wider uppercase text-gray-600 mb-2">Contact Us</h2>
      <h1 className="text-3xl font-bold text-center mb-4">Let's Start a Conversation</h1>
      <p className="text-center text-gray-500 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br/> labore
        et dolore magna aliqua. Ut enim ad minim.
      </p>
      <div className="bg-[#592EA9]  text-white w-full max-w-lg p-6 rounded-lg mb-8">
        <div className="flex justify-between text-sm">
          <div>
            <h3 className="font-bold">Working hours</h3>
            <p>Monday To Friday</p>
            <p>9:00 AM to 8:00 PM</p>
            <p className="text-gray-300">Our Support Team is available 24/7</p>
          </div>
          <div>
            <h3 className="font-bold">Contact Us</h3>
            <p>020 7993 2905</p>
            <p>hello@finsweet.com</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
        <select
          name="query"
          value={formData.query}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        >
          <option value="" disabled>Select Query Related</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Support">Support</option>
          <option value="Feedback">Feedback</option>
          <option value="Others">Others</option>
        </select>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32"
          required
        />
        <button
          type="submit"
          className="w-full p-3 bg-[#FFD050] text-white font-bold rounded-lg hover:bg-yellow-600 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
