import { cleanup, render } from '@testing-library/react';
import { Span } from '@/components';

const defaultProps = {
  className: '',
  children: null
};

describe('Span', () => {
  let component: any;

  beforeEach(() => {
    component = render(<Span {...defaultProps} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('Should render span', async () => {
    expect(component).toBeTruthy();
  });
});
