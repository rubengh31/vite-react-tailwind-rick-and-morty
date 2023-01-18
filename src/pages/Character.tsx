import { DetailCard, Span, Title, Image } from '@/components';
import { useLocation } from 'react-router-dom';

export default function Character(props: any) {
  const location = useLocation().state.element;

  return (
    <>
      <DetailCard>
        <div className="  mx-5 mt-2 flex justify-between items-center shadow-md border-2 px-2 pt-1 rounded-[2px] border-opacity-50  border-t-teal-50 border-l-teal-50  border-b-[#000000] border-r-[#000000]">
          <Span className="font-Merriweather font-bold text-lg">{location.name}</Span>
          <Image src="/src/assets/images/react.svg" alt="react" />
        </div>
        <div className="mt-4 mx-auto rounded-[1px] ring-4 my-1 h-[260px] w-[260px] shadow-lg shadow-black ring-offset-0 ring-[#f9b798] ">
          <Image className="object-fill" src={location.image} alt={location.name} />
        </div>
        <div className="mt-3 mx-7 my-1 flex justify-end items-center">
          <Span className="text-xs font-bold font-Merriweather">{location.species}</Span>
        </div>
        <div className="mx-2">
          <div className="bg-[url('https://i.imgur.com/neIKEeX.png')] bg-repeat">
            <div className="bg-slate-200 mx-1 my-2 px-1 ring-4 ring-[#f9bf1e] font-Merriweather">
              <Title className="font-bold">
                [{location.gender}/{location.status}/{location.location.name}]
              </Title>
              <Span className="text-[16px]">
                {location.episode.length} episodes Created {new Date(location.created).toLocaleDateString()}
              </Span>
            </div>
          </div>
        </div>
        <div className="mx-2 flex justify-between items-center">
          <Span className="text-[9px]">0000000</Span>
          <Span className="text-[9px]">©2022 RUBEN GOMEZ HERVAS</Span>
        </div>
      </DetailCard>
    </>
  );
}
