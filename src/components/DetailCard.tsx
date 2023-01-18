export default function DetailCard({ children }: any) {
  return (
    <>
      <section>
        <div className="container mx-auto py-10">
          <div className="flex  px-4 flex-wrap">
            <div className="w-full overflow-hidden flex justify-center items-center  ring-8 ring-[#392c21] bg-[#62a4ab] shadow-lg md:w-1/2 lg:w-1/4">
              <div className="bg-[url('https://i.imgur.com/DNVGE5B.png')] bg-repeat">{children}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
