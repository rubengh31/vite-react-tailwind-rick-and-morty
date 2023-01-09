import { Fragment, useEffect, useState } from 'react';
import { getCharacters } from '@/services/characters.service';
import { Button, SimpleCard, Image, Span } from '@/components';
import { Link } from 'react-router-dom';

export default function Characters() {
  const [characters, setCharacters] = useState([] as any);

  const getFromServiceCharacters = async () => {
    const { data } = await getCharacters();
    setCharacters(data.results);
  };

  const loadDataInCard = characters.map((element: any) => {
    return (
      <Fragment key={element.id}>
        <SimpleCard>
          <div className="flex justify-between space-x-6 items-center p-2">
            <div className="flex items-center space-x-4">
              <Image src={element.image} alt={element.name} className="rounded-full h-14 w-14" />
              <div className="flex flex-col space-y-2">
                <Span className="text-sm">{element.name}</Span>
                <Span className="text-xs">{element.gender}</Span>
              </div>
            </div>
            <Link to={`/characters/${element.id}`} state={{ element }}>
              <Button>Details</Button>
            </Link>
          </div>
        </SimpleCard>
      </Fragment>
    );
  });

  useEffect(() => {
    try {
      getFromServiceCharacters();
    } catch (error) {
      console.log(error);
    }
    return () => {};
  }, []);

  return (
    <>
      <div className="mt-5">{loadDataInCard}</div>
    </>
  );
}
