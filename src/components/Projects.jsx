import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import taskThumbnail from '../assets/images/task.jpeg';
import courseThumbnail from '../assets/images/2.jpeg';
import movieThumbnail from '../assets/images/mbl.jpg';
import rideThumbnail from '../assets/images/orf.jpeg';
import audioThumbnail from '../assets/images/1.jpeg';
import queryThumbnail from '../assets/images/q1.jpg';
import notesThumbnail from '../assets/images/n.jpg';
import aibolgThumbnail from '../assets/images/ai-blog.jpg';
import m1 from "../assets/images/m1.png"
import m2 from "../assets/images/m2.png"
import m3 from "../assets/images/m3.png"
import c1 from "../assets/images/c1.png"
import c2 from "../assets/images/c2.png"
import c3 from "../assets/images/c3.png"
import c4 from "../assets/images/c4.png"
import c5 from "../assets/images/c5.png"
import bl1 from "../assets/images/bl1.png"
import bl2 from "../assets/images/bl2.png"
import bl3 from "../assets/images/bl3.png"
import bl4 from "../assets/images/bl4.png"
import bl5 from "../assets/images/bl5.png"
import to2 from "../assets/images/to2.png"
import to3 from "../assets/images/to3.png"
import to4 from "../assets/images/to4.png"
import to5 from "../assets/images/to5.png"
import to6 from "../assets/images/to6.png"
import to7 from "../assets/images/to7.png"
import r1 from "../assets/images/r1.png"
import r2 from "../assets/images/r2.png"
import r3 from "../assets/images/r3.png"
import r4 from "../assets/images/r4.png"
import r5 from "../assets/images/r5.png"
import q2 from "../assets/images/q2.png"
import q3 from "../assets/images/q3.png"
import q5 from "../assets/images/q5.png"
import q6 from "../assets/images/q6.png"
import q7 from "../assets/images/q7.png"
import q1 from "../assets/images/q1.png"
import s1 from "../assets/images/s1.png"
import s2 from "../assets/images/s2.png"
import s3 from "../assets/images/s3.png"
import s4 from "../assets/images/s4.png"
import s5 from "../assets/images/s5.png"
import n1 from "../assets/images/n1.png"
import n2 from "../assets/images/n2.png"
import n3 from "../assets/images/n3.png"
import b1 from "../assets/images/bank.jpg"
import b2 from "../assets/images/b2.png"
import b21 from "../assets/images/b21.png"
import b3 from "../assets/images/b3.png"
import b4 from "../assets/images/b4.png"



const filters = ['All', 'Web Development', 'AI', 'SQL'];

const projects = [
  {
    title: "AI Blog Generator",
    description: "Full-stack AI-powered web app that converts YouTube videos into blog articles. Built with Django and CSS, using Pytube, AssemblyAI for transcription, and OpenAI GPT-3 for content generation.",
    tags: ["Django", "OpenAI", "AssemblyAI", "Pytube", "HTML", "CSS", "Full-Stack", "YouTube", "AI"],
    category: "Web Development",
    thumbnail: aibolgThumbnail,
    linkImages: [bl1,bl2,bl3,bl4,bl5],
    github: "https://github.com/2100030551/ai-blog-generator"
  },
  {
    title: "Course Registration Platform",
    description: "Full-stack course registration system with React.js frontend and Spring Boot backend. Features role-based access, JWT authentication, and PostgreSQL integration.",
    tags: ["React", "Java", "Spring Boot", "PostgreSQL", "Full-Stack", "JWT"],
    category: "Web Development",
    thumbnail: courseThumbnail,
    linkImages: [c1,c2,c3,c4,c5],
    github: "https://github.com/2100030551/course-registration"
  },

  {
    title: "To-Do List App",
    description: "A Django-based to-do app with Tailwind CSS UI, AJAX-based task updates, dark mode, due dates, and email reminders via scheduled cron jobs.",
    tags: ["Django", "Tailwind CSS", "AJAX", "SQLite", "Python", "Email", "Dark Mode"],
    category: "Web Development",
    thumbnail: taskThumbnail,
    linkImages: [to2,to3,to4,to5,to6,to7],
    github: "https://github.com/2100030551/To-do-list"
  },


  {
    title: "Movie Recommendation System",
    description: "A Flask-based app that recommends movies using TMDb API, with features like search, filtering by language/genre, and detailed movie info.",
    tags: ["Python", "Flask", "TMDb API", "Pandas", "Scikit-learn", "Pickle", "HTML", "CSS"],
    category: "Web Development",
    thumbnail: movieThumbnail,
    linkImages: [m1,m2,m3],
    github: "https://github.com/2100030551/movie-recommendation"
  },
    {
    title: "Query Agent Web Application",
    description: "Streamlit-based AI assistant integrating Gemini, Hugging Face, and Google Translate for chat, image captioning, speech, translation, sentiment analysis, and more.",
    tags: ["Gemini", "Hugging Face", "Google Translate", "Streamlit", "Python", "AI Assistant", "NLP", "Vision"],
    category: "AI",
    thumbnail: queryThumbnail,
    linkImages: [q1,q2,q3,q5,q6,q7],
    github: "https://github.com/2100030551/ai-query-agent"
  },
  {
    title: "Ride Fare Prediction",
    description: "Predicts ride fares using Random Forest models with features like distance, time, and traffic data. Includes fare classification into Low/Medium/High categories.",
    tags: ["Machine Learning", "Random Forest", "Pandas", "Scikit-learn", "Regression", "Classification"],
    category: "AI",
    thumbnail: rideThumbnail,
    linkImages: [r1,r2,r3,r4,r5],
    github: "https://github.com/2100030551/ride-fare-prediction"
  },
  {
    title: "Audio Sentiment Analysis",
    description: "Analyzes sentiment from audio files by transcribing speech to text and classifying it using NLP models like BERT or LSTM.",
    tags: ["NLP", "Python", "Flask", "SpeechRecognition", "TensorFlow", "BERT", "LSTM"],
    category: "AI",
    thumbnail: audioThumbnail,
    linkImages: [s1,s2,s3,s4,s5],
    github: "https://github.com/2100030551/sentiment-analysis"
  },

  {
    title: "AI Notes Summarizer",
    description: "Summarizes long-form text or uploaded files using Hugging Face Transformers. Built with React frontend and Django REST backend.",
    tags: ["React", "Django", "Hugging Face", "Transformers", "NLP", "PyMuPDF", "REST API", "PDF"],
    category: "AI",
    thumbnail: notesThumbnail,
    linkImages: [n1,n2,n3],
    github: "https://github.com/2100030551/AI-Notes_Summarizer"
  },
    {
    title: "Bank Management System",
    description: "A backend-focused project developed in Python with MySQL database integration. Handles core banking operations such as account creation, balance inquiry, deposits, withdrawals, and transaction history management.",
    tags: ["Python", "MySQL", "Database", "SQL", "Backend"],
    category: "SQL",   // ✅ New category for filtering
    thumbnail: b1, // placeholder icon (replace with real image)
    linkImages: [b2,b21,b3,b4], // if you have screenshots, add them like [img1, img2]
    github: "https://github.com/2100030551/Bank_Management_System"
  }
];

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('Web Development');
  const [overlayImages, setOverlayImages] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);

  const filteredProjects =
    selectedFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  const openOverlay = (images) => {
    if (!images || images.length === 0) return; // do nothing if no images
    setOverlayImages(images);
    setShowOverlay(true);
    document.body.style.overflow = "hidden";
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setOverlayImages([]);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="projects" className="py-20">
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
            Projects
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center mb-12 space-x-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full border transition ${
                selectedFilter === filter
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="h-48 overflow-hidden cursor-pointer"
                onClick={() =>
                  project.linkImages &&
                  project.linkImages.length > 0 &&
                  openOverlay(project.linkImages)
                }
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-auto">
                  {project.linkImages && project.linkImages.length > 0 ? (
                    <button
                      onClick={() => openOverlay(project.linkImages)}
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <FiExternalLink className="mr-1" />
                      View Images
                    </button>
                  ) : (
                    <span className="text-gray-400 italic text-sm">
                      No images available
                    </span>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
                  >
                    <FiGithub className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overlay Viewer */}
        {showOverlay && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col">
            <div className="flex justify-end p-4">
              <button
                onClick={closeOverlay}
                className="text-white text-3xl font-bold hover:text-red-400 transition"
                aria-label="Close image overlay"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 px-8 pb-8 overflow-auto">
              {overlayImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="Project View"
                  className="max-w-full max-h-[80vh] rounded shadow-lg"
                />
              ))}
            </div>
          </div>
        )}

        {/* GitHub Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/2100030551?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
          >
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
