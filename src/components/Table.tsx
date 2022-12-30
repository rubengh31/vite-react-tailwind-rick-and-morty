import SearchInput from './SearchInput';

function Table(props: any) {
  return (
    <>
      {props.hasSearch && <SearchInput />}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>{props.columns}</tr>
        </thead>
        <tbody>{props.listItems}</tbody>
      </table>
    </>
  );
}

export default Table;
