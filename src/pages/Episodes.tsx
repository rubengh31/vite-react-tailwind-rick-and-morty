import { useEffect, useState } from 'react';
import { getEpisodes } from '@/services/episodes.service';
import { SearchTableContainer } from '@/components';

export default function Episodes() {
  const [episodes, setEpisodes] = useState([] as any);

  const getFromServiceEpisodes = async () => {
    const { data } = await getEpisodes();
    setEpisodes(data.results);
  };

  useEffect(() => {
    try {
      getFromServiceEpisodes();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="mt-5">
        <SearchTableContainer data={episodes} />
      </div>
    </>
  );
}
