import React from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const isExternal = (u: string) => /^https?:\/\//.test(u);

const replaceExt = (u: string, newExt: string) => {
  return u.replace(/\.(png|jpe?g)$/i, `.${newExt}`);
};

const ResponsiveImage: React.FC<Props> = ({ src, alt, className, width, height, ...rest }) => {
  if (isExternal(src)) {
    // External images: render plain img with lazy loading
    return <img src={src} alt={alt} className={className} loading="lazy" width={width} height={height} {...rest} />;
  }

  // For local images, attempt AVIF and WebP fallbacks by changing extension
  const avif = replaceExt(src, 'avif');
  const webp = replaceExt(src, 'webp');

  // Use BASE_URL so assets work with Vite base paths
  const base = (import.meta as any).env?.BASE_URL || '/';

  return (
    <picture className={className}>
      <source srcSet={`${base}${avif.replace(/^\//, '')}`} type="image/avif" />
      <source srcSet={`${base}${webp.replace(/^\//, '')}`} type="image/webp" />
      <img src={`${base}${src.replace(/^\//, '')}`} alt={alt} loading="lazy" width={width} height={height} {...rest} />
    </picture>
  );
};

export default ResponsiveImage;
