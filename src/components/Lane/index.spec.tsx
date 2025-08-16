import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Lane from '../Lane';
import type { TimelineItem } from 'src/types';
import { parseISO } from 'date-fns';

describe('Lane component', () => {
  const items: TimelineItem[] = [
    { id: 1, start: '2021-01-01', end: '2021-01-03', name: 'Event A' },
    { id: 2, start: '2021-01-04', end: '2021-01-06', name: 'Event B' },
  ];

  const defaultProps = {
    laneIndex: 0,
    items,
    startDate: parseISO('2021-01-01'),
    rowHeight: 48,
    pxPerDay: 10,
    minItemWidthPx: 40,
    width: 300,
  };

  it('renders all items with their names', () => {
    render(<Lane {...defaultProps} />);

    expect(screen.getByText('Event A')).toBeInTheDocument();
    expect(screen.getByText('Event B')).toBeInTheDocument();
  });
});
