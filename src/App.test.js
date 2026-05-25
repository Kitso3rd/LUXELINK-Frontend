import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('exports a function component', () => {
    expect(typeof App).toBe('function');
  });

  test('renders without crashing', () => {
    render(<App />);
  });
});
