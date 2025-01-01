import { Box, Typography } from '@mui/material';

export default function Features() {
  return (
    <Box sx={{ marginX: '24px', marginTop: '24px' }}>
      {/* Section Header */}
      <Box
        sx={{
          marginBottom: '50px',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            marginBottom: '16px',
            color: '#333',
            marginTop: '40px',
            fontSize: { xs: '24px', md: '32px' },
          }}
        >
          Features
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '16px', md: '20px' },
            color: '#666',
          }}
        >
          That Simplify Your Development
        </Typography>
      </Box>

      {/* Feature Cards */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: '40px',
          justifyContent: 'center',
        }}
      >
        {/* Card 1 */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: '100%', md: '48%' },
            padding: '30px',
            borderRadius: '16px',
            background: 'linear-gradient(0deg, #1C5D99 0%, #46F0FC 130%)',
            color: '#fff',
            boxShadow: '0 6px 15px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              fontSize: '64px',
              marginBottom: '24px',
            }}
          >
            🛠️
          </Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              marginBottom: '16px',
              fontSize: { xs: '20px', md: '24px' },
            }}
          >
            Tools that make your work Easier
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '14px', md: '16px' },
              lineHeight: '1.6',
            }}
          >
            Access a suite of powerful tools tailored to boost productivity and
            streamline your development process.
          </Typography>
        </Box>

        {/* Card 2 */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: '100%', md: '48%' },
            padding: '30px',
            borderRadius: '16px',
            background: 'linear-gradient(0deg, #1C5D99 0%, #46F0FC 130%)',
            color: '#fff',
            boxShadow: '0 6px 15px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              fontSize: '64px',
              marginBottom: '24px',
            }}
          >
            📚
          </Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              marginBottom: '16px',
              fontSize: { xs: '20px', md: '24px' },
            }}
          >
            Documentation to Guide You
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '14px', md: '16px' },
              lineHeight: '1.6',
            }}
          >
            Explore comprehensive documentation that helps you learn, implement,
            and grow as a developer.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
