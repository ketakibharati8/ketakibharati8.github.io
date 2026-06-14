import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Loader, ShieldAlert } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
  projectUrl: string;
  fallbackUrl?: string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  projectName,
  projectUrl,
  fallbackUrl,
}) => {
  const [state, setState] = useState<'loading' | 'ready' | 'blocked'>('loading');
  const loadTimeRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleIframeLoad = useCallback(() => {
    const elapsed = Date.now() - loadTimeRef.current;
    // If onLoad fires in under 800ms, it's likely a browser error page (blocked by X-Frame-Options)
    // Real content takes longer to load
    if (elapsed < 800) {
      setState('blocked');
    } else {
      setState('ready');
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    setState('loading');
    loadTimeRef.current = Date.now();
    // Safety timeout: if iframe never fires onLoad after 10s, treat as blocked
    timerRef.current = setTimeout(() => {
      setState((s) => (s === 'loading' ? 'blocked' : s));
    }, 10000);
    return () => clearTimeout(timerRef.current);
  }, [isOpen, projectUrl]);

  const handleClose = () => {
    clearTimeout(timerRef.current);
    setState('loading');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="w-full max-w-4xl h-[80vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <h2
                  id="modal-title"
                  className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white truncate"
                >
                  {projectName}
                </h2>
                <div className="flex items-center gap-2">
                  <a
                    href={fallbackUrl || projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    <ExternalLink size={14} />
                    Open
                  </a>
                  <button
                    onClick={handleClose}
                    aria-label="Close modal"
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <X size={24} className="text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="flex-1 relative overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                {state === 'loading' && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 z-10 gap-3">
                    <Loader size={36} className="text-blue-500 animate-spin" />
                    <p className="text-sm text-gray-500">Loading preview...</p>
                  </div>
                )}

                {state === 'blocked' && (
                  <div className="text-center px-6">
                    <ShieldAlert size={48} className="mx-auto mb-4 text-amber-500" />
                    <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Preview unavailable</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-sm">
                      This site blocks embedding. You can open it in a new tab instead.
                    </p>
                    <a
                      href={fallbackUrl || projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Open in New Tab
                      <ExternalLink size={16} />
                    </a>
                  </div>
                )}

                <iframe
                  src={projectUrl}
                  title={projectName}
                  className={`w-full h-full border-0 ${state !== 'ready' ? 'absolute opacity-0' : ''}`}
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  onLoad={handleIframeLoad}
                />
              </div>

              <div className="px-4 sm:px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex justify-between items-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Preview of {projectName}
                </p>
                <a
                  href={fallbackUrl || projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Open in New Tab
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
