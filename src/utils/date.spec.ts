import * as dateUtils from './date';

describe('date utils', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('d parses ISO string to Date', () => {
    const date = dateUtils.d('2025-01-01');
    expect(date).toBeInstanceOf(Date);
    expect(date.toISOString().startsWith('2025-01-01')).toBe(true);
  });

  it('daysBetween calculates difference in days', () => {
    const days = dateUtils.daysBetween('2025-01-05', '2025-01-01');
    expect(days).toBe(4);
  });

  it('addDaysStr adds days and returns formatted string', () => {
    const result = dateUtils.addDaysStr('2025-01-01', 3);
    expect(result).toBe('2025-01-04');
  });

  it('formatMonth formats month correctly', () => {
    const result = dateUtils.formatMonth('2025-01-15');
    expect(result).toBe('Jan 2025');
  });

  it('formatDay formats day correctly', () => {
    const result = dateUtils.formatDay('2025-01-15');
    expect(result).toBe('2025-01-15');
  });

  it('toDate parses ISO string', () => {
    const date = dateUtils.toDate('2025-01-01');
    expect(date).toBeInstanceOf(Date);
  });

  it('dayDiff calculates difference between dates', () => {
    const a = new Date('2025-01-10');
    const b = new Date('2025-01-05');
    const diff = dateUtils.dayDiff(a, b);
    expect(diff).toBe(5);
  });
});
