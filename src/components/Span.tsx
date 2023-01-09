export default function Span({ className = '', children }: any) {
  return (
    <>
      <span className={className}>{children}</span>
    </>
  );
}
