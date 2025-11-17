import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Copyright &copy; {new Date().getFullYear()} Asrith . All rights reserved.

          </motion.p>
          
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            
            
            <span className="text-gray-600 dark:text-gray-300 ml-2">Made by TEJ</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;