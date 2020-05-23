import React from 'react';
import { render } from '@testing-library/react';
import Pure from './Pure';

test('renders learn react link', () => {
  const { getByText } = render(<Pure />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
