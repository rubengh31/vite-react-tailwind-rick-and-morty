import { Image } from '@/components';
import { cleanup, render } from '@testing-library/react';

const defaultProps = {
  src: '',
  width: '100',
  height: 'auto',
  alt: 'img',
  className: ''
};

describe('Image', () => {
  let component: any;

  beforeEach(() => {
    component = render(<Image {...defaultProps} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('Should render Image correctly', async () => {
    expect(component).toBeTruthy();
  });
});
