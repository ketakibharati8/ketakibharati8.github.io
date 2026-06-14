import { motion } from 'framer-motion';
import { PageTransition, ContainerAnimation, ItemAnimation } from '../components/Animations';
import { experience, education, skills, certifications, achievements } from '../data/portfolio';

const About = () => {
  const skillsByCategory = skills.reduce((acc: any, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // Vite provides BASE_URL at build time; use a safe fallback for TS env typings
  const viteBase = (import.meta as any)?.env?.BASE_URL ?? '/';

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-20 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <ContainerAnimation>
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-primary-700 dark:text-primary-200 mb-4 intense-heading">
                About Me
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Software Development Engineer specializing in high-performance FinTech systems, distributed architectures, and Kafka-based data pipelines. I focus on measurable impact, clear design, and engineering that scales.
              </p>
            </div>
          </ContainerAnimation>

          {/* Experience */}
          <div className="mb-20">
            <ContainerAnimation>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
            </ContainerAnimation>

            <div className="space-y-6">
              {experience.map((job, index) => (
                <ItemAnimation key={job.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.position}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                        {job.duration}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">{job.description}</p>

                    <ul className="space-y-2 mb-4">
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </ItemAnimation>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-20">
            <ContainerAnimation>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Education</h2>
            </ContainerAnimation>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <ItemAnimation key={edu.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {edu.institution}
                      </h3>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">{edu.field}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">{edu.details}</p>
                  </motion.div>
                </ItemAnimation>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-20">
            <ContainerAnimation>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Skills & Expertise</h2>
            </ContainerAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skillsByCategory).map(([category, categorySkills]: any, catIndex) => (
                <ItemAnimation key={category} delay={catIndex * 0.1}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{category}</h3>
                    <div className="space-y-4">
                      {categorySkills.map((skill: any) => (
                        <div key={skill.name}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {skill.name}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {skill.proficiency}%
                            </span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency}%` }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ItemAnimation>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-20">
            <ContainerAnimation>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Certifications</h2>
            </ContainerAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <ItemAnimation key={cert} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 text-white"
                  >
                    <p className="font-medium">{cert}</p>
                  </motion.div>
                </ItemAnimation>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <ContainerAnimation>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Key Achievements</h2>
            </ContainerAnimation>

            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <ItemAnimation key={index} delay={index * 0.1}>
                  <li className="flex items-start gap-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <span className="text-white text-sm font-bold">✓</span>
                    </motion.div>
                    <p className="text-gray-600 dark:text-gray-400">{achievement}</p>
                  </li>
                </ItemAnimation>
              ))}
            </ul>
          </div>
          {/* Small profile picture */}
          <div className="mt-12 text-center">
            <picture>
              <source srcSet={`${viteBase}photo.avif`} type="image/avif" />
              <source srcSet={`${viteBase}photo.webp`} type="image/webp" />
              <img
                src={`${viteBase}photo.png`}
                alt="Profile"
                loading="lazy"
                width={144}
                height={144}
                className="w-36 h-36 rounded-full mx-auto border-2 border-gray-200 dark:border-gray-700 shadow-md object-cover"
                style={{ backgroundColor: '#ffeb3b' }}
              />
            </picture>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
