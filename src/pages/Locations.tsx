import { Table } from '@/components';
import { getLocations } from '@/services/locations.service';
import { Fragment, useEffect, useState } from 'react';

export default function Locations() {
  const [locations, setLocations] = useState([] as any);

  const getFromServiceLocations = async () => {
    const { data } = await getLocations();
    setLocations(data.results);
  };

  const arrayColumns: string[] = ['Name', 'Dimension', 'Type', 'Residents', 'Created'];
  const columns = arrayColumns.map((element: string, i: number) => (
    <Fragment key={i}>
      <th scope="col" className="py-3 px-6">
        {element}
      </th>
    </Fragment>
  ));

  const listItems = locations.map((element: any) => (
    <Fragment key={element.id}>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="py-4 px-6">{element.name}</td>
        <td className="py-4 px-6">{element.dimension}</td>
        <td className="py-4 px-6">{element.type}</td>
        <td className="py-4 px-6">{element.residents.length}</td>
        <td className="py-4 px-6">{new Date(element.created).toLocaleDateString()}</td>
      </tr>
    </Fragment>
  ));

  useEffect(() => {
    try {
      getFromServiceLocations();
    } catch (error) {
      console.log(error);
    }

    return () => {};
  }, []);

  return (
    <>
      <Table listItems={listItems} columns={columns} hasSearch={true} />
    </>
  );
}
