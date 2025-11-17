import React from 'react';
import { motion } from 'framer-motion';

// Import education thumbnails
import klUniversityImg from '../assets/images/kluniversity.jpeg';
import narayanaImg from '../assets/images/narayana.jpeg';
import kkrGowthamImg from '../assets/images/kkrgowtham.jpg';

const education = [
  {
    degree: "B.Tech",
    institution: "KL University, Guntur",
    duration: "2021 - 2025",
    highlights: ["CGPA: 8.9"],
    thumbnail: klUniversityImg,
  },
  {
    degree: "Intermediate",
    institution: "Narayana Junior College, Gudavalli",
    duration: "2019 - 2021",
    highlights: ["Percentage: 89%"],
    thumbnail: narayanaImg,
  },
  {
    degree: "School",
    institution: "Dr. KKR Gowtham EM High School, Gudivada",
    duration: "2018 - 2019",
    highlights: ["CGPA: 10"],
    thumbnail: kkrGowthamImg,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center relative inline-block after:block after:w-16 after:h-1 after:bg-blue-500 after:mx-auto after:mt-2">
            Education
          </h2>
        </motion.div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={edu.thumbnail}
                  alt={`${edu.degree} at ${edu.institution}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-blue-500 dark:text-blue-400 mb-1">{edu.institution}</p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{edu.duration}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
