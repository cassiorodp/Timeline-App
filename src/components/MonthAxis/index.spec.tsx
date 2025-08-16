import { render, screen } from '@testing-library/react';
import { format } from 'date-fns';
import MonthAxis from '.';

describe('MonthAxis', () => {
  it('renders the correct months between start and end dates', () => {
    const start = new Date(2025, 0, 15);
    const end = new Date(2025, 2, 10);
    const pxPerDay = 10;

    render(<MonthAxis start={start} end={end} pxPerDay={pxPerDay} />);

    const janLabel = format(new Date(2025, 0, 1), 'LLL yyyy');
    const febLabel = format(new Date(2025, 1, 1), 'LLL yyyy');
    const marLabel = format(new Date(2025, 2, 1), 'LLL yyyy');

    expect(screen.getByText(janLabel)).toBeInTheDocument();
    expect(screen.getByText(febLabel)).toBeInTheDocument();
    expect(screen.getByText(marLabel)).toBeInTheDocument();
  });
});
