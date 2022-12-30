import SearchInput from '@/components/SearchInput';
import { Table } from '.';

export default function SearchTableContainer(props: any) {
  console.log('Episodes', props.data);

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <div className="pb-4 bg-white float-right">
        <div className="relative mt-1">
          <SearchInput />
        </div>
      </div>
      <Table />
    </div>
  );
}
