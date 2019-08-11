  
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import DisplayPage from './DisplayPage.js';


describe('<Display />', () => {
  it('renders without crashing', () => {
    render(<DisplayPage />);
  });
  
})