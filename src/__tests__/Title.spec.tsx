import { Title } from '@/components';
import { cleanup, render } from '@testing-library/react';

const defaultProps = {
  type: 'h1',
  children: undefined,
  className: ''
};

describe('Title', () => {
  let component: any;

  beforeEach(() => {
    component = render(<Title {...defaultProps} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('Should render Title correctly', async () => {
    expect(component).toBeTruthy();
  });
});
