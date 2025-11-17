import { motion } from 'framer-motion';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Python', level: 80 },
    { name: 'Django', level: 70 },
    { name: 'SQL', level: 75 },
    { name: 'REST APIs', level: 75 },
    { name: 'AWS', level: 65 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Git', level: 70 },
    { name: 'Responsive Design', level: 85 },
  ];

  const professionalSkills = [
    { title: 'API Development', icon: '🔌', desc: 'Building RESTful APIs with Django and Node.js' },
    { title: 'Database Design', icon: '🗃️', desc: 'SQL schema design and optimization' },
    { title: 'Cloud Services', icon: '☁️', desc: 'AWS deployment and management' },
    { title: 'Problem Solving', icon: '🧩', desc: 'Strong analytical skills to tackle complex issues' },
    { title: 'Communication', icon: '💬', desc: 'Effective in team collaboration and documentation' },
      { title: 'AI', icon: '🧠', desc: 'Experience with machine learning models, NLP, and AI integrations' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-blue-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Professional Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {professionalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <h4 className="font-semibold text-sm mb-1">{skill.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">{skill.desc}</p>
                </motion.div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-6">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {['AWS', 'Flask', 'GitHub','IDLE', 'Jupyter Notebook', 'MySQL', 'PostgreSQL', 'Postman', 'Pycharm', 'VS Code'].map((tool, index) => (
                <motion.div
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;