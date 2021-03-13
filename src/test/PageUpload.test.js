import React from 'react';
import { render, cleanup, fireEvent, act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import PageUpload from '../components/SubpageUpload/PageUpload.js'
import raw from './mp3_over_90s_test.mp3';

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

//Test different files
/*it('Test for mp3', async () => {
    render(<PageUpload />);
    const mBlob = { size: 1024, type: "audio/mpeg-3" }; //Logic will not detect this as real mp3 file
    await waitFor(() => 
        userEvent.upload(screen.getByTestId('upload-input'), mBlob)   //How to add local test file
    );
    expect(screen.getByTestId('upload-msg')).toHaveTextContent('ERRORMSG')
});*/