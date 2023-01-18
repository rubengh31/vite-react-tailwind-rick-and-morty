export default function Image({ src = '', width = 'max-width', height = 'auto', alt = 'img', className = '' }) {
  return (
    <>
      <img src={src} width={width} height={height} alt={alt} className={className} />
    </>
  );
}
