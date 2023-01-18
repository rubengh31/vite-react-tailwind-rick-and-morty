export default function Span({ className = '', children = null }: any) {
  return (
    <>
      <span className={className}>{children}</span>
    </>
  );
}
