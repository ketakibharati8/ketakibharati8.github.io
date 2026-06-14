import { motion } from 'framer-motion';
import React, { Suspense, useState } from 'react';
import { getResume } from '../data/resumeLoader';
import { ExternalLink, Github, Play } from 'lucide-react';
import { ScrollRevealWrapper } from '../components/ScrollRevealWrapper';

const ProjectModal = React.lazy(() => import('../components/ProjectModal').then((m) => ({ default: m.ProjectModal })));

const Projects: React.FC = () => {
  const resume = getResume();
  const projects = resume.projects;
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen pt-20 pb-20 bg-white dark:bg-gray-900">
      {/* Modal (lazy-loaded) */}
      <Suspense>
        <ProjectModal
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          projectName={selectedProject?.name || ''}
          projectUrl={selectedProject?.live_url || ''}
          fallbackUrl={selectedProject?.repo_url}
        />
      </Suspense>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 border-b border-gray-200 dark:border-gray-700"
      >
          <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-300 mb-4 intense-heading">
            Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Production-grade systems handling millions of transactions, real-time pipelines, and innovative solutions in FinTech, distributed systems, and applied AI.
          </p>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ScrollRevealWrapper key={idx} direction="up" delay={idx * 0.1}>
              <motion.div
                whileHover={{ translateY: -8 }}
                className="group relative rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col h-full"
              >
                {/* Header */}
                <div className="p-6 sm:p-8 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.name}</h3>
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">{project.summary}</p>
                </div>

                {/* Technical Details */}
                <div className="p-6 sm:p-8 space-y-4 flex-1">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-sm">Implementation</h4>
                    <ul className="space-y-2">
                      {project.technical_details.map((detail, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="text-blue-500 font-bold flex-shrink-0">→</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex gap-3">
                  {project.live_url && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg min-h-[48px]"
                      >
                        <Play size={18} />
                        <span>Preview</span>
                      </motion.button>
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-200 hover:shadow-md min-h-[48px]"
                      >
                        <ExternalLink size={18} />
                        <span className="hidden sm:inline">Live</span>
                      </a>
                    </>
                  )}
                  {project.repo_url && (
                    <a
                      href={project.repo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200 min-h-[48px]"
                    >
                      <Github size={18} />
                      <span className="hidden sm:inline">Repo</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </ScrollRevealWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
