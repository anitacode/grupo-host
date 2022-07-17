import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

describe('Loading main features', () => {
  render(<App />)
  test('renders main', () => {
    const mainElement = screen.getByTestId('main');
    expect(mainElement).toBeInTheDocument();
  });  
});


