export default function SimpleCard({ children }: any) {
  return (
    <>
      <div className="flex items-center justify-center mb-2">
        <div className="flex flex-col border-gray-300 border bg-white divide-y rounded-lg flex-none w-full md:w-1/2 lg:w-1/3">
          <div className="flex flex-col space-y-2 divide-y">{children}</div>
        </div>
      </div>
    </>
  );
}
