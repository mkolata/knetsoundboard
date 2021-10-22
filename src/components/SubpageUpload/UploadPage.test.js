import React from 'react';
import { render, cleanup, fireEvent, act, screen, waitFor } from '@testing-library/react';
import PageUpload from './UploadPage.js'

let container;
//jest
afterEach(cleanup);

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

it('Expect Upload Button', () => {
    const { getByTestId } = render(<PageUpload />);
    expect(getByTestId('upload-button')).toBeTruthy();
  });