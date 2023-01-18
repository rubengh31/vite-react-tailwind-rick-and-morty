export default function SimpleCard({ children }: any) {
  return (
    <>
      <div className="w-96 inline-flex flex-row flex-wrap items-center justify-center m-2">
        <div className="min-w-full border-gray-300 border bg-white divide-y rounded-lg flex-none md:w-1/2 lg:w-1/3">
          <div className="space-y-2 divide-y">{children}</div>
        </div>
      </div>
    </>
  );
}
