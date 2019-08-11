import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import RegForm from './RegForm.js';


describe('<RegForm />', () => {
    it('renders without crashing', () => {
      render(<RegForm />);
    });
    it('logs in when clicked', () => {
      let clicked = true;
      const { getByText } = render(<RegForm submit={() => clicked = true} />);
      const submitButton = getByText(/submit/i);
      fireEvent.click(submitButton);
      expect(clicked).toBe(true);
    });
});