import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Check } from 'lucide-react';
import { useState } from 'react';
import { PageTransition } from '../components/Animations';
import { ScrollRevealWrapper } from '../components/ScrollRevealWrapper';
import { getResume } from '../data/resumeLoader';

const Contact = () => {
  const resume = getResume();
  const [copied, setCopied] = useState(false);
  const [ariaMessage, setAriaMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCopyEmail = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigator.clipboard.writeText(resume.personal.email);
    setCopied(true);
    setAriaMessage('Email address copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
    setTimeout(() => setAriaMessage(''), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please fill in all required fields.');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    // Build mailto link so user's email client opens with a draft addressed to you
    const to = resume.personal.email;
    const subject = formData.subject || `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${encodeURIComponent(
      formData.message
    )}`;

    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Open user's email client with draft
    setStatus('loading');
    setStatusMessage('Opening your email client...');
    // Small delay for UX then redirect
    setTimeout(() => {
      window.location.href = mailto;
      setStatus('idle');
    }, 300);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: resume.personal.email,
      href: `mailto:${resume.personal.email}`,
      copyable: true,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: resume.personal.location,
      href: '#',
      copyable: false,
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <ScrollRevealWrapper direction="up">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 intense-heading">
                Let's Connect
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                I'm always open to discussing new projects, opportunities, or technical challenges. Reach out and let's start a conversation.
              </p>
            </div>
          </ScrollRevealWrapper>

          {/* Contact Methods Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <ScrollRevealWrapper key={index} direction="up" delay={index * 0.1}>
                {method.copyable ? (
                  <motion.button
                    onClick={handleCopyEmail}
                    whileHover={{ translateY: -6 }}
                    className="text-left bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 border border-gray-200 dark:border-gray-700 rounded-md flex items-center justify-center text-gray-700 dark:text-gray-300">
                        <method.icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{method.label}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-mono break-all">{method.value}</p>
                      </div>
                    </div>
                    {copied && (
                      <p className="text-xs text-green-600 dark:text-green-300 flex items-center gap-2">
                        <Check size={14} />
                        Email address copied to clipboard
                      </p>
                    )}
                  </motion.button>
                ) : (
                  <ScrollRevealWrapper key={`${index}-card`} direction="up">
                    <motion.a
                      href={method.href}
                      whileHover={{ translateY: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}
                      className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 border border-gray-200 dark:border-gray-700 rounded-md flex items-center justify-center text-gray-700 dark:text-gray-300">
                          <method.icon size={18} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{method.label}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{method.value}</p>
                        </div>
                      </div>
                    </motion.a>
                  </ScrollRevealWrapper>
                )}
              </ScrollRevealWrapper>
            ))}
          </div>

          {/* Email auto-copy behavior: clicking the email card will copy address to clipboard */}

          {/* Contact Form */}
          <ScrollRevealWrapper direction="up" delay={0.3}>
            <motion.div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Send a Message</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Fill out the form below and I'll respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200"
                  />
                </div>

                {/* ARIA live region for copy feedback */}
                <div aria-live="polite" className="sr-only">{ariaMessage}</div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project opportunity"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200 resize-none"
                  />
                </div>

                {/* Status Message */}
                {status !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      status === 'success'
                        ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800'
                        : status === 'error'
                        ? 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
                        : 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                    }`}
                  >
                    {statusMessage}
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <Send size={20} />
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </motion.button>

                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  Your information will only be used to respond to your inquiry and won't be shared with third parties.
                </p>
              </form>
            </motion.div>
          </ScrollRevealWrapper>

          {/* Alternative Communication */}
          <ScrollRevealWrapper direction="up" delay={0.4}>
            <motion.div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Prefer a direct email?</span> You can also reach me at{' '}
                <a
                  href={`mailto:${resume.personal.email}`}
                  className="text-blue-600 dark:text-blue-400 font-mono font-semibold hover:underline"
                >
                  {resume.personal.email}
                </a>{' '}
                or connect on{' '}
                <a
                  href={resume.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  LinkedIn
                </a>
                .
              </p>
            </motion.div>
          </ScrollRevealWrapper>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
