import { Fragment, useEffect, useState } from 'react';
import { getCharacters } from '@/services/characters.service';
import { Button, DetailCard, SimpleCard } from '@/components';
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
        <SimpleCard id={element.id} src={element.image} name={element.name} gender={element.gender}>
          <Link to={`/characters/${element.id}`} state={{ element }}>
            <Button text="Details" />
          </Link>
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
  }, []);

  return (
    <>
      <div className="mt-5">{loadDataInCard}</div>
    </>
  );
}
