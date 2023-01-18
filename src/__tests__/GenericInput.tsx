import { GenericInput } from '@/components';
import { cleanup, render } from '@testing-library/react';

const defaultProps = {
  name: undefined,
  id: undefined,
  className: undefined,
  placeholder: undefined,
  type: undefined,
  value: undefined,
  onClick: undefined,
  onChange: undefined
};

describe('GenericInput', () => {
  let component: any;

  beforeEach(() => {
    component = render(<GenericInput {...defaultProps} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('Should render GenericInput correctly', async () => {
    expect(component).toBeTruthy();
  });
});
