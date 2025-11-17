import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiUsers, FiFolder } from 'react-icons/fi';
import tej from '../assets/images/t.jpeg';
const About = () => {
  const stats = [
    { icon: <FiCode size={24} />, text: 'Frontend Development' },
    { icon: <FiDatabase size={24} />, text: 'Python & SQL' },
    { icon: <FiUsers size={24} />, text: 'Collaborative Projects' },
    { icon: <FiFolder size={24} />, text: 'Personal Projects' },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={tej}
                alt="About"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
          
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md text-center"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-blue-500 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{stat.text}</p>
                </motion.div>
              ))}
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm an enthusiastic developer with skills in JavaScript, React, Python, and SQL. I specialize in creating responsive web interfaces while also enjoying backend development and data analysis. My goal is to build efficient, user-friendly applications that solve real problems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My journey in programming began with Python, which led me to explore full-stack development. I'm constantly expanding my knowledge through personal projects and open-source contributions. I'm particularly interested in the intersection of Web Development and Artificial Intelligence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="btn-primary"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-2 border border-blue-500 text-blue-500 font-medium rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;