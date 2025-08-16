import { render, screen } from '@testing-library/react';
import * as assignLanesUtil from '../../utils/assignLanes';
import * as dateUtil from '../../utils/date';
import Timeline from '.';
import { PropsWithChildren } from 'react';

vi.mock('../Lane', () => ({
  __esModule: true,
  default: ({ children }: PropsWithChildren) => (
    <div data-testid="lane">{children}</div>
  ),
}));

describe('Timeline', () => {
  const items = [
    {
      id: 1,
      start: '2025-01-10',
      end: '2025-01-20',
      title: 'Item 1',
      name: 'Item 1',
    },
    {
      id: 2,
      start: '2025-01-15',
      end: '2025-01-25',
      title: 'Item 2',
      name: 'Item 2',
    },
  ];

  beforeEach(() => {
    vi.spyOn(assignLanesUtil, 'assignLanes').mockReturnValue([
      [items[0]],
      [items[1]],
    ]);

    vi.spyOn(dateUtil, 'toDate').mockImplementation((d) => new Date(d));
  });

  it('renders MonthAxis when showMonthTicks is true', () => {
    render(<Timeline items={items} showMonthTicks={true} />);

    expect(screen.getByText(/Jan 2025/i)).toBeInTheDocument();
  });

  it('does not render MonthAxis when showMonthTicks is false', () => {
    render(<Timeline items={items} showMonthTicks={false} />);

    expect(screen.queryByText(/Jan 2025/i)).not.toBeInTheDocument();
  });

  it('renders correct number of Lane components', () => {
    const { container } = render(<Timeline items={items} />);

    const lanes = container.querySelectorAll('[data-testid="lane"]');
    expect(lanes.length).toBe(2);
  });
});
