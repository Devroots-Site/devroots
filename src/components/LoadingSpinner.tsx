import { Box, CircularProgress, Typography } from '@mui/material';

interface ILoadingSpinner {
  loadingmessage?: string;
}

export default function LoadingSpinner(props: ILoadingSpinner) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
      <CircularProgress />
      {props.loadingmessage && (
        <Typography variant="body2" color="text.secondary">
          {props.loadingmessage}
        </Typography>
      )}
    </Box>
  );
}
