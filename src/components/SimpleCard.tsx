import Button from './Button';
import Image from './Image';

export default function SimpleCard(props: any) {
  console.log(props);
  return (
    <>
      <div className="flex items-center justify-center mb-2">
        <div className="flex flex-col border-gray-300 border bg-white divide-y rounded-lg flex-none w-full md:w-1/2 lg:w-1/3">
          <div className="flex flex-col space-y-2 divide-y">
            <div className="flex justify-between space-x-6 items-center p-2">
              <div className="flex items-center space-x-4">
                <Image src={props.src} alt={props.name} className="rounded-full h-14 w-14" />
                <div className="flex flex-col space-y-2">
                  <span className="text-sm">{props.name}</span>
                  <span className="text-xs">{props.gender}</span>
                </div>
              </div>
              <div>
                <Button text="Details" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
