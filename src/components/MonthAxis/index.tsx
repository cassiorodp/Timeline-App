import { Box, Typography } from '@mui/material';
import {
  addDays,
  differenceInCalendarDays,
  endOfMonth,
  format,
  startOfMonth,
} from 'date-fns';

function MonthAxis({
  start,
  end,
  pxPerDay,
}: {
  start: Date;
  end: Date;
  pxPerDay: number;
}) {
  const months: { label: string; left: number; width: number }[] = [];
  let cursor = startOfMonth(start);
  while (cursor <= end) {
    const monthStart = startOfMonth(cursor);
    const monthEnd = endOfMonth(cursor);
    const left = differenceInCalendarDays(monthStart, start) * pxPerDay;
    const w = (differenceInCalendarDays(monthEnd, monthStart) + 1) * pxPerDay;
    months.push({ label: format(monthStart, 'LLL yyyy'), left, width: w });
    cursor = addDays(monthEnd, 1);
  }
  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        background: 'background.paper',
        zIndex: 1,
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Box sx={{ position: 'relative', height: 48 }}>
        {months.map((m, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              left: m.left,
              width: m.width,
              height: 48,
              borderRight: '1px solid',
              borderColor: 'divider',
              display: 'flex',
              alignItems: 'center',
              pl: 1,
            }}
          >
            <Typography variant="overline">{m.label}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default MonthAxis;
