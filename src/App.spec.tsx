import { render, screen } from '@testing-library/react';
import App from './App';

vi.mock('./components/Timeline', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="mock-timeline" />,
  };
});

describe('App', () => {
  it('renders title and description', () => {
    render(<App />);

    expect(screen.getByText(/Timeline/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Event Items arranged in compact lanes./i)
    ).toBeInTheDocument();
  });

  it('renders Timeline component', () => {
    render(<App />);

    expect(screen.getByTestId('mock-timeline')).toBeInTheDocument();
  });
});
