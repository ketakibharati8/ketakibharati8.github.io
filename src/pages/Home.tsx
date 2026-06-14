import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/Animations';
// ScrollRevealWrapper removed from this page (Impact section removed)
import { getResume } from '../data/resumeLoader';

const Home = () => {
  const resume = getResume();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const topSkills = [
    'Java',
    'JavaScript',
    'Spring Boot',
    'Vert.x',
    'Kafka',
    'ReactJS',
    'JUnit',
    'Mockito',
    'Git',
    'GitHub',
    'Jenkins',
    'Postman',
    'MySQL',
    'SQL',
    'MongoDB',
    'Data Structures',
    'OOP',
    'Microservices',
    'REST APIs',
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <div className="relative min-h-screen pt-16 bg-gradient-to-br from-primary-50 via-primary-100 to-white dark:from-primary-900 dark:via-primary-800 dark:to-primary-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="mb-8 flex items-center gap-2">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold">
                <Zap size={14} className="mr-2" />
                Open to opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
                <span className="block font-black">Ketaki Bharati</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-cyan-400 font-bold text-4xl sm:text-5xl lg:text-6xl mt-2">
                  Software Development Engineer
                </span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl leading-relaxed font-light tracking-wide"
            >
              I build high-performance FinTech systems and backend platforms with a focus on correctness, scalability, and operational excellence. Kafka pipelines, microservices, and distributed systems drive every solution.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05, x: 5, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg shadow-lg transition-all duration-200 min-h-[48px]"
                >
                  Explore My Work
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-bold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 min-h-[48px]"
                >
                  Download Resume
                </motion.button>
              </a>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(239, 68, 68, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg shadow-lg transition-all duration-200 min-h-[48px]"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </motion.div>

            {/* Non-critical visual enhancements removed to prioritize fast initial load */}

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-8 border-t border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-400 text-sm font-medium py-2">Connect:</p>
              {[
                { icon: Github, href: resume.links.github, label: 'GitHub' },
                { icon: Linkedin, href: resume.links.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${resume.personal.email}`, label: 'Email' },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
                >
                  <item.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [4, 8, 4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Impact section removed per request */}

      {/* Tech Stack Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              Core Technologies
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-light">The tools and languages I use to build solutions</p>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center">
            {topSkills.map((skill, idx) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-6 py-3 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Ready to collaborate?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
               Let's discuss your next FinTech or backend engineering opportunity. I'm always interested in problems that require thoughtful systems design.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 shadow-lg transition-all duration-200 min-h-[48px]"
              >
                Start a Conversation
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
