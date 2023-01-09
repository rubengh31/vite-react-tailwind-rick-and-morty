import SearchInput from './SearchInput';

function Table({ listItems, columns, hasSearch = false }: any) {
  return (
    <>
      {hasSearch && <SearchInput />}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>{columns}</tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    </>
  );
}

export default Table;
