import { useMemo } from 'react';
import { Box } from '@mui/material';
import { TimelineItem } from '../../types';
import { startOfMonth, endOfMonth } from 'date-fns';
import { assignLanes } from '../../utils/assignLanes';
import { dayDiff, toDate } from '../../utils/date';
import Lane from '../Lane';
import MonthAxis from '../MonthAxis';

type Props = {
  items: TimelineItem[];
  rowHeight?: number;
  pxPerDay?: number;
  minItemWidthPx?: number;
  showMonthTicks?: boolean;
};

export default function Timeline({
  items,
  rowHeight = 48,
  pxPerDay = 14,
  minItemWidthPx = 64,
  showMonthTicks = true,
}: Props) {
  const { lanes, startDate, endDate, totalDays } = useMemo(() => {
    const min =
      items.reduce((acc, it) => {
        const d = toDate(it.start);
        return acc && acc < d ? acc : d;
      }, undefined as Date | undefined) ?? toDate(items[0].start);

    const max =
      items.reduce((acc, it) => {
        const d = toDate(it.end);
        return acc && acc > d ? acc : d;
      }, undefined as Date | undefined) ?? toDate(items[0].end);

    const lanes = assignLanes(items);
    const totalDays = Math.max(
      1,
      dayDiff(endOfMonth(max), startOfMonth(min)) + 1
    );
    return {
      lanes,
      startDate: startOfMonth(min),
      endDate: endOfMonth(max),
      totalDays,
    };
  }, [items]);

  const width = totalDays * pxPerDay;

  return (
    <Box
      sx={{
        overflowX: 'auto',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
      }}
    >
      <Box sx={{ position: 'relative', minWidth: width }}>
        {showMonthTicks && (
          <MonthAxis start={startDate} end={endDate} pxPerDay={pxPerDay} />
        )}
        <Box sx={{ position: 'relative', mt: 6, pb: 1 }}>
          {lanes.map((lane, idx) => (
            <Lane
              key={idx}
              laneIndex={idx}
              items={lane}
              startDate={startDate}
              rowHeight={rowHeight}
              pxPerDay={pxPerDay}
              minItemWidthPx={minItemWidthPx}
              width={width}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
