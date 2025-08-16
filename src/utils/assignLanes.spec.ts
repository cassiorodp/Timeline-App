import { TimelineItem } from 'src/types';
import { assignLanes } from './assignLanes';

describe('assignLanes', () => {
  it('places non-overlapping items in the same lane', () => {
    const items: TimelineItem[] = [
      { id: 1, start: '2025-01-01', end: '2025-01-03', name: 'Item 1' },
      { id: 2, start: '2025-01-04', end: '2025-01-05', name: 'Item 2' },
    ];

    const lanes = assignLanes(items);

    expect(lanes.length).toBe(1);
    expect(lanes[0]).toEqual(items);
  });

  it('places overlapping items in different lanes', () => {
    const items: TimelineItem[] = [
      { id: 1, start: '2025-01-01', end: '2025-01-05', name: 'Item 1' },
      { id: 2, start: '2025-01-03', end: '2025-01-06', name: 'Item 2' },
      { id: 3, start: '2025-01-06', end: '2025-01-07', name: 'Item 3' },
    ];

    const lanes = assignLanes(items);

    expect(lanes.length).toBe(2);
    expect(lanes[0]).toEqual([items[0], items[2]]);
    expect(lanes[1]).toEqual([items[1]]);
  });

  it('handles single item', () => {
    const items: TimelineItem[] = [
      { id: 1, start: '2025-01-01', end: '2025-01-01', name: 'Item 1' },
    ];

    const lanes = assignLanes(items);

    expect(lanes.length).toBe(1);
    expect(lanes[0]).toEqual(items);
  });

  it('returns empty array when no items', () => {
    const lanes = assignLanes([]);
    expect(lanes).toEqual([]);
  });
});
