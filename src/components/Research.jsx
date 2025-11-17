import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import researchImg from '../assets/images/e.jpeg';

const ResearchSection = () => {
  const publication = {
    title: "Emotion Detection Based On Psychological Signals Using Machine Learning Algorithm",
    journal: "Eudoxus Press",
    year: "2024",
    link: "https://eudoxuspress.com/index.php/pub/article/view/355",
    image: researchImg,
    description:
      "This paper explores how psychological signals can be used to detect human emotions through various machine learning algorithms. The study aims to improve emotion recognition accuracy by combining physiological data with computational models.",
    techStack: ["Machine Learning", "Psychological Signals", "Emotion Detection", "Data Analysis"],
  };

  return (
    <section
      id="research"
      className="py-20"
      aria-label="Research and Publications Section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-title mb-12 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Research & Publications
        </motion.h2>

        <article className="flex flex-col md:flex-row gap-12 items-center max-w-5xl mx-auto">
          {/* Image */}
          <motion.div
            className="md:w-1/3 rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={publication.image}
              alt={publication.title}
              className="w-72 h-72 object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="md:w-2/3 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
              {publication.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg font-medium">
              {publication.journal} · {publication.year}
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {publication.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-6" role="list" aria-label="Technologies used">
  {publication.techStack.map((tech, idx) => (
    <span
      key={idx}
      tabIndex={0}
      role="listitem"
      className="text-xs bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full font-semibold cursor-default focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {tech}
    </span>
  ))}
</div>


            {/* Read Publication Button */}
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-400"
              aria-label={`Read full publication: ${publication.title}`}
            >
              Read Publication
              <FiExternalLink className="ml-2" size={18} aria-hidden="true" />
            </a>
          </motion.div>
        </article>
      </div>
    </section>
  );
};

export default ResearchSection;
