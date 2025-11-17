import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import profileImage from '../assets/images/profile.png'; // Correctly import the image
import resume from '../assets/images/Resume.pdf';

// Exact LeetCode icon SVG from Simple Icons
const LeetCodeIcon = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);

// StopStalk fallback: uses a simple “S” in circle style
const StopStalkIcon = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Circle border */}
    <circle
      cx="12"
      cy="12"
      r="9"
    />
    {/* Dollar sign in center */}
    <text
      x="12"
      y="15.5"
      textAnchor="middle"
      fontSize="14"
      fill="currentColor"
      fontFamily="Arial, sans-serif"
      dominantBaseline="middle"
      fontWeight="bold"
    >
      $
    </text>
  </svg>
);


const Hero = () => {
  const iconSize = 20;
const socialLinks = [
  { icon: <FiMail size={iconSize} />, label: 'Email', url: 'mailto:tejasrith@gmail.com' },
  { icon: <FiLinkedin size={iconSize} />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/tirumalasetty-tejasrith-89873224a/' },
  { icon: <FiGithub size={iconSize} />, label: 'GitHub', url: 'https://github.com/2100030551' },
  { icon: <LeetCodeIcon size={iconSize} />, label: 'LeetCode', url: 'https://leetcode.com/u/KLU_2100030551/' },
  { icon: <StopStalkIcon size={iconSize} />, label: 'StopStalk', url: 'https://www.stopstalk.com/user/profile/tejasrith' },
];


  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-blue-500">Tejasrith Tirumalasetty</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-gray-600 dark:text-gray-300">
            Fullstack Developer
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              I specialize in building fast, responsive web applications with modern frameworks like React. I'm currently focused on developing scalable frontends and seamless user experiences.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="btn-primary inline-flex items-center">Contact Me</a>
              <a
  href={resume}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center px-6 py-2 border border-blue-500 text-blue-500 font-medium rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
>
  <FiDownload className="mr-2" />
  Resume
</a>

            </div>
            <div className="flex space-x-4 text-gray-700 dark:text-gray-200">
  {socialLinks.map((link, i) => (
    <motion.a
      key={i}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group p-2 rounded-full bg-white dark:bg-gray-800 shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.9 }}
      aria-label={link.label}
    >
      {link.icon}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black dark:bg-gray-900 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {link.label}
      </span>
    </motion.a>
  ))}
</div>

          </motion.div>
          <motion.div
  className="md:w-1/2 mt-8 md:mt-0"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  {/* Outer wrapper controls size */}
  <div className="relative w-full max-w-[420px] mx-auto">
    {/* Subtle glow */}
    <div className="absolute -inset-4 bg-blue-500 rounded-full opacity-20 blur-xl"></div>

    {/* Circle container (fixed circular shape) */}
    <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-xl border-4 border-blue-500 bg-transparent">
      <img
        src={profileImage}
        alt="Profile"
        className="w-full h-full object-cover rounded-full object-center object-top translate-y-[0%]"
      />
    </div>
  </div>
</motion.div>




        </div>
      </div>
    </section>
  );
};

export default Hero;
