# models/

Place any 3D assets you want to serve under this folder. Recommended structure:

- `public/models/sample.glb` — your optimized GLB (Draco compression recommended)
- `public/models/3d-poster.svg` — a small poster image used while the model loads

Guidance:
- Compress glTF/GLB assets with Draco or use glTF + binary buffers.
- Keep models under ~1-2MB for web delivery on portfolio sites; host larger models on a CDN.
- Update `src/components/ThreeDemo.tsx` if you change filenames or paths.
