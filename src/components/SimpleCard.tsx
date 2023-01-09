export default function SimpleCard(props: any) {
  return (
    <>
      <div className="flex items-center justify-center mb-2">
        <div className="flex flex-col border-gray-300 border bg-white divide-y rounded-lg flex-none w-full md:w-1/2 lg:w-1/3">
          <div className="flex flex-col space-y-2 divide-y">
            <div className="flex justify-between space-x-6 items-center p-2">
              <div className="flex items-center space-x-4">
                {props.image && <>{props.image}</>}
                <div className="flex flex-col space-y-2">{props.span && <>{props.span}</>}</div>
              </div>
              {props.button && <>{props.button}</>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
