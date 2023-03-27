import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Snowball Button component', () => {
  test('Should be rendered to primary case', () => {
    render(<Button variant="primary">Test</Button>);
    const PrimaryButton = screen.getByRole('button');
    expect(PrimaryButton).toBeInTheDocument();
  });
  test('Should be rendered with Test2 text', () => {
    render(<Button variant="primary">Test2</Button>);
    const ButtonText = screen.getByText('Test2');
    expect(ButtonText).toBeInTheDocument();
  });
});
