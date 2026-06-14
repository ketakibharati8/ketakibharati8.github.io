import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const SocialIcon = ({ icon: Icon, href, label }: any) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ scale: 1.2, y: -5 }}
    whileTap={{ scale: 0.95 }}
    className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-colors"
  >
    <Icon size={20} />
  </motion.a>
);



export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              Ketaki Bharati
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Software Development Engineer building reliable, scalable FinTech systems and backend solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#/" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#/projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Follow</h4>
            <div className="flex space-x-4">
              <SocialIcon icon={Github} href={personalInfo.socials.github} label="GitHub" />
              <SocialIcon icon={Linkedin} href={personalInfo.socials.linkedin} label="LinkedIn" />
              <SocialIcon icon={Mail} href={personalInfo.socials.email} label="Email" />
            </div>

            {/* Second row - additional coding profiles */}
            <div className="flex space-x-4 mt-3">

            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
            <p>&copy; {currentYear} Ketaki Bharati. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
