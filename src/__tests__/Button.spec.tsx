import { Button } from '@/components';
import { cleanup, render } from '@testing-library/react';

const defaultProps = {
  type: 'submit',
  className:
    'text-xs text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2',
  children: undefined
};

describe('Button', () => {
  let component: any;

  beforeEach(() => {
    component = render(<Button {...defaultProps} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('Should render Button correctly', async () => {
    expect(component).toBeTruthy();
  });
});
