import React, { useState } from 'react';

const MODEL_VIEWER_SRC = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';

const ThreeDemo: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  const loadModelViewer = () => {
    if ((window as any).customElements && (window as any).customElements.get('model-viewer')) {
      setLoaded(true);
      return;
    }

    const s = document.createElement('script');
    s.src = MODEL_VIEWER_SRC;
    s.async = true;
    s.onload = () => setLoaded(true);
    document.body.appendChild(s);
  };

  return (
    <div className="mt-8 flex justify-center">
      {!loaded ? (
        <button
          className="px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-md shadow hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={loadModelViewer}
        >
          Load 3D Preview
        </button>
      ) : (
        <div className="w-full max-w-xl">
          {/* Example model-viewer usage. Replace src with your optimized glTF */}
          <div
            dangerouslySetInnerHTML={{
              __html: `
            <model-viewer src="/models/sample.glb" alt="3D demo" camera-controls autoplay ar ar-modes="webxr scene-viewer quick-look" exposure="1" style="width:100%;height:360px;background:transparent" poster="/models/3d-poster.svg"></model-viewer>
          `,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ThreeDemo;
