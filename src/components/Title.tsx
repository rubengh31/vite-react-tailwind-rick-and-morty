export default function Title({ type = 'h1', children, className = '' }: any) {
  const titleToShow =
    type === 'h1' ? (
      <h1 className={className}>{children}</h1>
    ) : type === 'h2' ? (
      <h2 className={className}>{children}</h2>
    ) : (
      <h3 className={className}>{children}</h3>
    );
  return <>{titleToShow}</>;
}
