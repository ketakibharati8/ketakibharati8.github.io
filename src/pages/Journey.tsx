import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Journey: React.FC = () => {
  interface Scene {
    id: number;
    emoji?: string;
    years: string;
    heading: string;
    paragraphs: string[];
  }

  const scenes: Scene[] = [
    {
      id: 1,
      emoji: '🎓',
      years: '2021 – 2025',
      heading: 'Engineering at VIIT: Foundation & Growth',
      paragraphs: [
        'Began the journey at Vishwakarma Institute of Information Technology, pursuing B. Tech. in Electronics and Telecommunications Engineering. Explored campus clubs, technical events, and NSS activities.',
        'Developed a strong foundation in data structures, algorithms, and backend engineering. Built projects and participated in hackathons that sharpened problem-solving skills.',
        'Graduated with CGPA 8.93, with a passion for building scalable systems and a growing interest in FinTech.',
      ],
    },
    {
      id: 2,
      emoji: '🌟',
      years: '2023 – 2024',
      heading: 'Leadership & Impact: NSS Vice President',
      paragraphs: [
        'Served as Vice President of NSS VIIT (2023–24), leading a team of volunteers and organizing impactful community events.',
        'Built and deployed a web application in just 48 hours using open-source technology for event polling and awareness campaigns.',
        'The initiative engaged 3,500+ users and increased blood donation count by 25%, demonstrating the power of technology for social impact.',
      ],
    },
    {
      id: 3,
      emoji: '💼',
      years: 'Jun 2025 – Dec 2025',
      heading: 'Engineering Intern at PayU Payments',
      paragraphs: [
        'Joined PayU as an Engineering Intern in Bengaluru, working on real-world FinTech systems.',
        'Built dynamic database failover for the ACS datastore layer and implemented CSV bulk upload processing for ICICI.',
        'Delivered key reports including EMI transaction reports and notification reports on the admin portal.',
        'Strengthened validation logic, increasing code coverage by ~25% and decreasing regression incidents.',
      ],
    },
    {
      id: 4,
      emoji: '🚀',
      years: 'Jan 2026 – Present',
      heading: 'SDE-I at PayU: Building Production Systems',
      paragraphs: [
        'Continued at PayU as a Software Development Engineer - I, working on high-performance payment processing systems.',
        'Re-architected Kafka consumption layer for 32+ topics with 3-tier exception classification and DLQ pipeline.',
        'Implemented Grid-based 3DS authentication for ICICI across 5 microservices and led NPCI SecureNxt (3DS 2.0) backend delivery.',
        'Built SMS ShortCode flows, GCOT request/response handling, and reduced issuer onboarding time by ~40% through BIN-level validations.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">

      {/* Cinematic Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-black dark:via-blue-950 dark:to-black overflow-hidden flex items-center"
      >
        {/* Cinematic background elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl"
          />
        </div>

        {/* Director's opening scene */}
        <div className="relative max-w-5xl mx-auto w-full">
          {/* Opening credits style */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-8"
          >
            <p className="text-blue-300 text-sm tracking-widest font-light uppercase">A journey of</p>
            <p className="text-blue-200 text-base tracking-wider font-light">Growth • Engineering • Impact</p>
          </motion.div>

          {/* Main title - cinematic scale */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-4 leading-tight tracking-tight">
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block"
              >
                My
              </motion.span>
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-200 to-cyan-300"
              >
                Journey
              </motion.span>
            </h1>
          </motion.div>

          {/* Storyteller's opening monologue */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed font-light italic">
              "Every engineer's story begins with curiosity. Mine started with a passion for building systems that work at scale."
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-sm text-blue-200 font-semibold tracking-wider"
            >
              ↓ Scroll to explore the scenes ↓
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [4, 8, 4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-1 h-2 bg-blue-300 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Cinematic alternating timeline */}
      <div className="relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">🎬 THE JOURNEY — KETAKI BHARATI</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">A cinematic retelling — click or scroll each scene to reveal more.</p>
          </motion.div>

          <div className="relative">
            {/* vertical timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-300 to-transparent opacity-30" />

            <div className="space-y-20">
              {scenes.map((s, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div key={s.id} className="relative">
                    <div className="flex flex-col md:flex-row items-start md:items-center">
                      {/* Left column */}
                      <div className={isLeft ? 'w-full md:w-1/2 pr-4 flex justify-end' : 'w-full md:w-1/2 pr-4 hidden md:flex'}>
                        {isLeft && (
                          <motion.article
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.06 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl max-w-lg hover:scale-[1.02] transform-gpu transition-transform"
                            aria-labelledby={`scene-${s.id}-title`}
                          >
                            <div className="flex items-center gap-3">
                              <div className="text-2xl">{s.emoji}</div>
                              <div>
                                <p className="text-xs text-gray-500">{s.years}</p>
                                <h3 id={`scene-${s.id}-title`} className="text-lg font-bold text-gray-900 dark:text-white">{s.heading}</h3>
                              </div>
                            </div>
                            <div className="mt-3 text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                              {s.paragraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                              ))}
                            </div>
                          </motion.article>
                        )}
                      </div>

                      {/* Center marker */}
                      <div className="w-full md:w-12 flex justify-center">
                        <div className="relative flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-blue-500 ring-8 ring-white dark:ring-gray-900 shadow-md" />
                          <div className="absolute -top-6 text-xs text-gray-500 hidden md:block">{s.years}</div>
                        </div>
                      </div>

                      {/* Right column */}
                      <div className={isLeft ? 'w-full md:w-1/2 pl-4 hidden md:flex' : 'w-full md:w-1/2 pl-4 flex justify-start'}>
                        {!isLeft && (
                          <motion.article
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.06 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl max-w-lg hover:scale-[1.02] transform-gpu transition-transform"
                            aria-labelledby={`scene-${s.id}-title`}
                          >
                            <div className="flex items-center gap-3">
                              <div className="text-2xl">{s.emoji}</div>
                              <div>
                                <p className="text-xs text-gray-500">{s.years}</p>
                                <h3 id={`scene-${s.id}-title`} className="text-lg font-bold text-gray-900 dark:text-white">{s.heading}</h3>
                              </div>
                            </div>
                            <div className="mt-3 text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                              {s.paragraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                              ))}
                            </div>
                          </motion.article>
                        )}
                      </div>

                      {/* Mobile single-column card (moved to a single mobile list below for deterministic rendering) */}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile single-column list (rendered once to avoid duplication) */}
            <div className="md:hidden mt-6 space-y-4">
              {scenes.map((s) => (
                <motion.article
                  key={`mobile-${s.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg"
                  aria-labelledby={`scene-${s.id}-title-mobile`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-xl">{s.emoji}</div>
                    <div>
                      <p className="text-xs text-gray-500">{s.years}</p>
                      <h4 id={`scene-${s.id}-title-mobile`} className="text-base font-bold text-gray-900 dark:text-white">{s.heading}</h4>
                    </div>
                  </div>
                  <div className="mt-3 text-gray-700 dark:text-gray-300 text-sm space-y-2">
                    {s.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>

            {/* CTA preserved below timeline */}
            <div className="mt-16 text-center">
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.03 }} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-md shadow-md">
                  Let's Connect
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
