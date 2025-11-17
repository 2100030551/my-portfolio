import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

// Uniform letter SVG components with same viewBox and style
const LetterA = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 20h20L12 2z" />
  </svg>
);

const LetterS = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 7c0-3-7-3-7 0 0 3 7 3 7 6 0 3-7 3-7 0" />
  </svg>
);

const LetterR = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 21V3h7a4 4 0 0 1 0 8h-7" />
    <path d="M13 11l4 7" />
  </svg>
);

const LetterI = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="3" x2="12" y2="21" />
  </svg>
);

const LetterT = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" y1="3" x2="20" y2="3" />
    <line x1="12" y1="3" x2="12" y2="21" />
  </svg>
);

const LetterH = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" y1="3" x2="4" y2="21" />
    <line x1="20" y1="3" x2="20" y2="21" />
    <line x1="4" y1="12" x2="20" y2="12" />
  </svg>
);

const Header = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const moreRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setShowMore(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const mainNavItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  const moreNavItems = [
    
    { name: 'Certifications', href: '#certifications' },
    { name: 'Research', href: '#research' },
    { name: 'Contact', href: '#contact' },
  ];

  const allNavItems = [...mainNavItems, ...moreNavItems];

  return (
    <>
      <style>{`
        /* Container for the logo letters */
        .logo-container {
          display: flex;
          gap: 4px;
          position: relative;
          color: #0ea5e9; /* Tailwind sky-500 */
          font-weight: 700;
        }
        
        }
      `}</style>

      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-md py-2 shadow-sm'
            : 'py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo composed of custom SVG letters with light shine */}
            <motion.a
              href="#home"
              className="logo-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              aria-label="ASRITH logo"
            >
              <LetterA />
              <LetterS />
              <LetterR />
              <LetterI />
              <LetterT />
              <LetterH />
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 relative">
              {mainNavItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium hover:text-blue-500 transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}

              <div className="relative" ref={moreRef}>
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="flex items-center text-sm font-medium hover:text-blue-500 transition-colors focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={showMore}
                  aria-controls="more-menu"
                >
                  More <FiChevronDown className="ml-1" />
                </button>
                <AnimatePresence>
                  {showMore && (
                    <motion.div
                      id="more-menu"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-lg rounded-md mt-2 py-2 w-48 z-20"
                    >
                      {moreNavItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                          onClick={() => setShowMore(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ml-4"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4"
              >
                <div className="flex flex-col space-y-4 pb-4">
                  {allNavItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium hover:text-blue-500 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Header;
