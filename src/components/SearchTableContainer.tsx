import { InputSearch } from '@components/InputSearch'
import Table from '@components/Table'

export function SearchTableContainer () {
  return (
    <>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <div className="pb-4 bg-white float-right">
          <div className="relative mt-1">
            <InputSearch/>
          </div>
        </div>
        <Table/>
      </div>
    </>
  )
}
