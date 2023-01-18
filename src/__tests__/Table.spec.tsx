import { cleanup, render } from '@testing-library/react';
import { Table } from '@/components';

const defaultProps = {
  listItems: undefined,
  columns: undefined,
  hasSearch: false
};

describe('Table', () => {
  let component: any;

  beforeEach(() => {
    component = render(<Table {...defaultProps} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('Should render Table', async () => {
    expect(component).toBeTruthy();
  });
});
