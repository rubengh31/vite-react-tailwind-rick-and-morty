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
        <SimpleCard
          image={<Image src={element.image} alt={element.name} className="rounded-full h-14 w-14" />}
          span={
            <>
              <Span className="text-sm" text={element.name} />
              <Span className="text-xs" text={element.gender} />
            </>
          }
          button={
            <>
              <Link to={`/characters/${element.id}`} state={{ element }}>
                <Button
                  text="Details"
                  className="text-xs text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
                />
              </Link>
            </>
          }
        />
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
