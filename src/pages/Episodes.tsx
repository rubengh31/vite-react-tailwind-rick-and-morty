import { Fragment, useEffect, useState } from 'react';
import { getEpisodes } from '@/services/episodes.service';
import { Table } from '@/components';

export default function Episodes() {
  const [episodes, setEpisodes] = useState([] as any);

  const getFromServiceEpisodes = async () => {
    const { data } = await getEpisodes();
    setEpisodes(data.results);
  };

  const arrayColumns: string[] = ['Episode', 'Name', 'Characters', 'Created', 'Air date'];
  const columns = arrayColumns.map((element: string, i: number) => (
    <Fragment key={i}>
      <th scope="col" className="py-3 px-6">
        {element}
      </th>
    </Fragment>
  ));

  const listItems = episodes.map((element: any) => (
    <Fragment key={element.id}>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="py-4 px-6">{element.episode}</td>
        <td className="py-4 px-6">{element.name}</td>
        <td className="py-4 px-6">{element.characters.length}</td>
        <td className="py-4 px-6">{new Date(element.created).toLocaleDateString()}</td>
        <td className="py-4 px-6">{new Date(element.air_date).toLocaleDateString()}</td>
      </tr>
    </Fragment>
  ));

  useEffect(() => {
    try {
      getFromServiceEpisodes();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Table listItems={listItems} columns={columns} hasSearch={true} />
    </>
  );
}
