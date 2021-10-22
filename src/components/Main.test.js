import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Main from './Main.js'
//jest
afterEach(cleanup);

it('Default page name', () => {
  const { getByTestId } = render(<Main />);
  expect(getByTestId('page-name')).toHaveTextContent('Soundboard')
});

it('Open Upload page', () => {
  const { getByTestId } = render(<Main />);
  fireEvent.click(getByTestId('burger-menu-button'))
  fireEvent.click(getByTestId('Upload-menu-button'))

  expect(getByTestId('page-name')).toHaveTextContent('Upload')
});