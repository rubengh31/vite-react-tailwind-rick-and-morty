function Table (props: any) {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="py-3 px-6">
            Product name
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td className="py-4 px-6">Sliver</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
