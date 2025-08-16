import { Box, Stack, Typography } from '@mui/material';
import Timeline from './components/Timeline/';
import items from './data/timelineItems';

export default function App() {
  return (
    <Stack spacing={3} sx={{ py: 4 }}>
      <Box>
        <Typography variant="h4" gutterBottom>
          Timeline
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Event Items arranged in compact lanes.
        </Typography>
      </Box>
      <Timeline items={items} />
    </Stack>
  );
}
