import { DetailCard } from '@/components';
import { cleanup, render } from '@testing-library/react';

const defaultProps = {
  children: undefined
};

describe('DetailCard', () => {
  let component: any;

  beforeEach(() => {
    component = render(<DetailCard {...defaultProps} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('Should render DetailCard correctly', async () => {
    expect(component).toBeTruthy();
  });
});
