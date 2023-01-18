export default function Span({ className = '', children = '' }: any) {
  return (
    <>
      <span data-cy="span" className={className}>
        {children}
      </span>
    </>
  );
}
