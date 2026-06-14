import React from 'react';
import { PageTransition } from '../components/Animations';
import { motion } from 'framer-motion';
import { certifications } from '../data/portfolio';

const Certifications: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white intense-heading">Certifications</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Professional certifications and achievements</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 text-white shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🏅</span>
                </div>
                <p className="font-medium text-sm leading-relaxed">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Certifications;
