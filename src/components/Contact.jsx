import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FiMail, FiMapPin,
  FiGithub, FiLinkedin, FiTwitter, FiInstagram
} from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setSubmitStatus({ success: true, message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ success: false, message: data.message || 'Something went wrong.' });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Network error. Try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialIcons = {
    github: <FiGithub size={20} />,
    linkedin: <FiLinkedin size={20} />,
    twitter: <FiTwitter size={20} />,
    instagram: <FiInstagram size={20} />,
  };

  const socialLinks = {
    github: 'https://github.com/2100030551',
    linkedin: 'https://www.linkedin.com/in/tirumalasetty-tejasrith-89873224a/',
    twitter: 'https://twitter.com/yourusername',
    instagram: 'https://instagram.com/yourusername',
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left section with contact info */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-blue-500 mr-4 mt-1"><FiMail size={20} /></div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:tejasrith@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
                    tejasrith@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-blue-500 mr-4 mt-1"><FiMapPin size={20} /></div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Bangalore, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {Object.keys(socialIcons).map((social, index) => (
                  <motion.a
                    key={index}
                    href={socialLinks[social]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-700 p-3 rounded-full shadow hover:shadow-md transition-all text-blue-500"
                    whileHover={{ y: -5 }}
                  >
                    {socialIcons[social]}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side with form */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 dark:bg-gray-800"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 dark:bg-gray-800"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 dark:bg-gray-800"
                  placeholder="Let me know how I can help you"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 dark:bg-gray-800"
                  placeholder="Hi, I'd like to talk about..."
                  required
                />
              </div>

              {submitStatus && (
                <div className={`mb-4 p-3 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}

              <motion.button
                type="submit"
                className="btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
