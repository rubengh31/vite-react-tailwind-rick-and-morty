import { SearchInput } from '@/components';
import { cleanup, render } from '@testing-library/react';

describe('SearchInput', () => {
  let component: any;

  beforeEach(() => {
    component = render(<SearchInput />);
  });

  afterEach(() => {
    cleanup();
  });

  it('Should render SearchInput correctly', async () => {
    expect(component).toBeTruthy();
  });
});
