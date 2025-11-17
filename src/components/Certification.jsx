import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import { SiRedhat, SiOracle, SiSalesforce } from 'react-icons/si';

const certifications = [
 {
  title: "AWS Certified Cloud Practitioner",
  issuer: "Amazon Web Services",
  year: "2023",
  link: "https://www.credly.com/badges/42ff8f36-939c-46b0-821e-a513893beeab/linked_in_profile",
  techStack: ["AWS", "Cloud"],
  image: "https://img.icons8.com/color/96/amazon-web-services.png",
},

  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2024",
    link: "https://www.credential.net/d2f3b3a9-25a4-4974-a8e0-ce5da19efee9#gs.838qtl",
    techStack: ["TensorFlow", "Machine Learning", "AI"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
  },
  {
    title: "RedHat Certified Enterprise Application Developer (EX183)",
    issuer: "RedHat",
    year: "2023",
    link: "https://www.credly.com/badges/56cfc8ec-b78e-4340-9c32-f7121094a219/linked_in_profile",
    techStack: ["RedHat", "Linux", "DevOps"],
    icon: SiRedhat,
    color: '#EE0000',
  },
  {
    title: "Oracle Certified Associate",
    issuer: "Oracle",
    year: "2023",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=87075D88FF49A90647DB47403E653700A023751F07515CED1D126CEEB35E3A20",
    techStack: ["Oracle Cloud", "Cloud"],
    icon: SiOracle,
    color: '#F80000',
  },
  {
    title: "Salesforce AI Associate",
    issuer: "Salesforce",
    year: "2024",
    link: "https://trailhead.salesforce.com/en/credentials/verification/",
    techStack: ["Salesforce", "AI", "CRM"],
    icon: SiSalesforce,
    color: '#1798C1',
  },
];

const CertificationSection = () => {
  const scrollRef = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const cardWidth = 300 + 32;

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 0);
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scrollByAmount = (amount) => {
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900 relative" aria-label="Certifications Section">
      <div className="container mx-auto px-6 lg:px-8 relative">
        <motion.h2
          className="mb-12 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block relative">
            Certifications
            <span
              aria-hidden="true"
              className="block h-1 w-20 bg-blue-600 dark:bg-blue-400 rounded mt-2 mx-auto"
            />
          </span>
        </motion.h2>

        {canScrollPrev && (
          <button
            aria-label="Scroll previous certifications"
            onClick={() => scrollByAmount(-cardWidth)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {canScrollNext && (
          <button
            aria-label="Scroll next certifications"
            onClick={() => scrollByAmount(cardWidth)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex space-x-8 overflow-x-auto px-2 pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 dark:scrollbar-track-gray-700 scroll-smooth"
        >
          {certifications.map((cert, idx) => {
            const IconComponent = cert.icon;
            return (
              <motion.article
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col justify-between items-center text-center flex-shrink-0 w-[300px] snap-start"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                tabIndex={0}
                aria-label={`${cert.title} certification by ${cert.issuer}`}
              >
                {/* Logo or Image */}
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={`${cert.title} logo`}
                    className="mb-4"
                    style={{ width: 48, height: 48, objectFit: 'contain' }}
                  />
                ) : IconComponent ? (
                  <IconComponent
                    size={48}
                    aria-hidden="true"
                    style={{ color: cert.color }}
                    className="mb-4"
                  />
                ) : null}

                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  {cert.title}
                </h3>

                {/* Tech stack tags */}
                <div role="list" aria-label="Technologies used" className="flex flex-wrap justify-center gap-3 mb-6">
                  {cert.techStack.map((tech, i) => (
                    <span
                      key={i}
                      role="listitem"
                      tabIndex={0}
                      className="bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold cursor-default focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Issuer and Year */}
                <div className="mb-6 space-y-1 text-gray-700 dark:text-gray-300 font-medium">
                  <p><span className="font-semibold">Issuer:</span> {cert.issuer}</p>
                  <p><span className="font-semibold">Year:</span> {cert.year}</p>
                </div>

                {/* Link */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  aria-label={`View certification details for ${cert.title}`}
                >
                  View Certificate <FiAward className="ml-2" size={20} aria-hidden="true" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
