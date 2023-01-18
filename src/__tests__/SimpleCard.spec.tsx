import { SimpleCard } from '@/components';
import { cleanup, render } from '@testing-library/react';

const defaultProps = {
  children: undefined
};

describe('SimpleCard', () => {
  let component: any;

  beforeEach(() => {
    component = render(<SimpleCard {...defaultProps} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('Should render SimpleCard correctly', async () => {
    expect(component).toBeTruthy();
  });
});
