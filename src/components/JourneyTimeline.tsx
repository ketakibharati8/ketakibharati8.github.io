import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  subtitle?: string;
  type: 'education' | 'work' | 'achievement' | 'project';
  details: string[];
  metrics?: string[];
}

export const JourneyTimeline: React.FC<{ events: TimelineEvent[] }> = ({ events }) => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.querySelector('[data-timeline]');
      if (timeline) {
        const rect = timeline.getBoundingClientRect();
        const position = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / window.innerHeight));
        setScrollPosition(position);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sortedEvents = [...events].sort((a, b) => {
    const ay = Number(a.year);
    const by = Number(b.year);
    if (!isNaN(ay) && !isNaN(by)) return ay - by;
    if (!isNaN(ay)) return -1;
    if (!isNaN(by)) return 1;
    return 0;
  });

  const numericYears = sortedEvents.map((e) => Number(e.year)).filter((n) => !isNaN(n));
  const startYear = numericYears.length ? Math.min(...numericYears) : (sortedEvents[0]?.year || '');
  const endYear = numericYears.length ? Math.max(...numericYears) : (sortedEvents[sortedEvents.length - 1]?.year || '');

  return (
    <div data-timeline className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
      {/* Time scrubber progress bar - Scene indicator */}
      <div className="sticky top-0 z-40 bg-gradient-to-b from-white to-transparent dark:from-gray-900 pb-4 mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mb-4"
        >
          <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-widest font-semibold">
            Journey Timeline • {startYear} – {endYear}
          </p>
        </motion.div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{startYear}</span>
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{endYear}</span>
        </div>
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600"
            style={{
              width: `${Math.max(5, scrollPosition * 100)}%`,
            }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          />
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        {sortedEvents.map((event, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="mb-12 relative group"
          >
            {/* Timeline node */}
            <div className="flex gap-6">
              {/* Left side - year/type */}
              <div className="flex flex-col items-center flex-shrink-0">
                <motion.div
                  role="img"
                  aria-label={`Year ${event.year}`}
                  className={`w-10 h-10 rounded-full shadow-lg flex-shrink-0 ${
                    event.type === 'work'
                      ? 'bg-blue-500'
                      : event.type === 'education'
                        ? 'bg-purple-500'
                        : 'bg-green-500'
                  }`}
                />
                {idx < sortedEvents.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 64 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className={`w-1 bg-gradient-to-b mt-2 ${
                      event.type === 'work'
                        ? 'from-blue-400 to-blue-200 dark:from-blue-600 dark:to-blue-800'
                        : event.type === 'education'
                          ? 'from-purple-400 to-purple-200 dark:from-purple-600 dark:to-purple-800'
                          : 'from-green-400 to-green-200 dark:from-green-600 dark:to-green-800'
                    }`}
                  />
                )}
              </div>

              {/* Right side - content */}
              <div
                className="flex-1 pb-4 cursor-pointer"
                onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
              >
                <motion.div
                  className={`p-5 rounded-lg bg-white dark:bg-gray-800 border-2 transition-all ${
                    event.type === 'work'
                      ? 'border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500'
                      : event.type === 'education'
                        ? 'border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500'
                        : 'border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-500'
                  }`}
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
                >
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{event.title}</h3>
                      {event.subtitle && (
                        <p className={`text-sm font-semibold mt-1 ${
                          event.type === 'work'
                            ? 'text-blue-600 dark:text-blue-400'
                            : event.type === 'education'
                              ? 'text-purple-600 dark:text-purple-400'
                              : 'text-green-600 dark:text-green-400'
                        }`}>
                          {event.subtitle}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-light">{event.year}</p>
                    </div>
                    <motion.span
                      animate={{ rotate: expandedIdx === idx ? 180 : 0 }}
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full flex-shrink-0 ${
                        event.type === 'work'
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                          : event.type === 'education'
                            ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200'
                            : 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200'
                      }`}
                    >
                      {event.type}
                    </motion.span>
                  </div>

                  {/* Expandable details - story reveal */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={expandedIdx === idx ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 overflow-hidden"
                  >
                    <ul className="space-y-3">
                      {event.details.map((detail, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex gap-3 leading-relaxed">
                          <span className={`font-bold mt-0.5 flex-shrink-0 ${
                            event.type === 'work'
                              ? 'text-blue-500'
                              : event.type === 'education'
                                ? 'text-purple-500'
                                : 'text-green-500'
                          }`}>→</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    {event.metrics && event.metrics.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <p className={`text-xs font-semibold mb-2 uppercase tracking-wide ${
                          event.type === 'work'
                            ? 'text-blue-700 dark:text-blue-300'
                            : event.type === 'education'
                              ? 'text-purple-700 dark:text-purple-300'
                              : 'text-green-700 dark:text-green-300'
                        }`}>
                          ⭐ Key Metrics
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {event.metrics.map((metric, i) => (
                            <span 
                              key={i} 
                              className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                                event.type === 'work'
                                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300'
                                  : event.type === 'education'
                                    ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300'
                                    : 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-300'
                              }`}
                            >
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
