import { TimelineItem } from '../types';

export function assignLanes(
  items: TimelineItem[],
  opts?: { minWidthDays?: number }
): TimelineItem[][] {
  const minWidthDays = opts?.minWidthDays ?? 0;

  const sorted = [...items].sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
  );

  const lanes: TimelineItem[][] = [];

  for (const item of sorted) {
    const startTime = new Date(item.start).getTime();
    const endTime = new Date(item.end).getTime();
    const durationDays = Math.max(
      1,
      Math.ceil((endTime - startTime) / (1000 * 60 * 60 * 24)) + 1
    );
    const virtualEnd = new Date(
      endTime + Math.max(0, minWidthDays - durationDays) * 24 * 60 * 60 * 1000
    );

    let placed = false;
    for (const lane of lanes) {
      const last = lane[lane.length - 1];
      const lastEnd = new Date(last.end);
      if (lastEnd < new Date(item.start)) {
        lane.push(item);
        placed = true;
        break;
      }
    }
    if (!placed) lanes.push([item]);
  }

  return lanes;
}
