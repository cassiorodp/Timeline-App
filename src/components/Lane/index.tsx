import { Box, Paper, Tooltip, Typography } from '@mui/material';
import { format, toDate } from 'date-fns';
import { TimelineItem } from 'src/types';
import { dayDiff } from '../../utils/date';

function Lane({
  items,
  startDate,
  rowHeight,
  pxPerDay,
  minItemWidthPx,
  width,
}: {
  laneIndex: number;
  items: TimelineItem[];
  startDate: Date;
  rowHeight: number;
  pxPerDay: number;
  minItemWidthPx: number;
  width: number;
}) {
  return (
    <Box
      sx={{
        position: 'relative',
        height: rowHeight,
        minWidth: width,
        borderTop: '1px dashed',
        borderColor: 'divider',
      }}
    >
      {items.map((item) => {
        const start = toDate(item.start);
        const end = toDate(item.end);
        const left = dayDiff(start, startDate) * pxPerDay;
        const days = Math.max(1, dayDiff(end, start) + 1);
        const w = Math.max(days * pxPerDay, minItemWidthPx);
        return (
          <Tooltip
            key={item.id}
            title={
              <>
                <Typography variant="subtitle2">{item.name}</Typography>
                <Typography variant="caption">
                  {format(start, 'yyyy-MM-dd')} → {format(end, 'yyyy-MM-dd')}
                </Typography>
              </>
            }
            arrow
          >
            <Paper
              elevation={2}
              sx={{
                position: 'absolute',
                top: 6,
                left,
                width: w,
                height: rowHeight - 12,
                p: 1,
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
            >
              <Typography variant="body2" noWrap>
                {item.name}
              </Typography>
            </Paper>
          </Tooltip>
        );
      })}
    </Box>
  );
}

export default Lane;
