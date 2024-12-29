import { Box, Typography } from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
import { TimelineProps } from './TimeLine.type';

export default function TimeLine({ items }: TimelineProps) {
  return (
    <Box
      sx={{
        padding: { xs: '20px', md: '60px 80px' },
      }}
    >
      {/* Header Section */}
      <Box sx={{ marginBottom: '50px', textAlign: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '16px',
          }}
        >
          <TimelineIcon
            sx={{
              fontSize: '40px',
              color: '#0078ff',
              boxShadow: '0px 4px 10px rgba(0, 120, 255, 0.3)',
              borderRadius: '50%',
              padding: '8px',
              backgroundColor: '#f5f9ff',
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              color: '#0078ff',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              fontSize: { xs: '24px', md: '32px' },
            }}
          >
            Timeline
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '14px', md: '18px' },
            color: '#555',
            fontStyle: 'italic',
          }}
        >
          My work experience, projects, and milestones
        </Typography>
      </Box>

      {/* Timeline Cards */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center',
          width: '100%',
          padding: { xs: '10px', md: '20px' },
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: '#ffffff',
              border: '1px solid #e0e0e0',
              borderRadius: '10px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              width: '100%',
              maxWidth: '600px',
              padding: '20px',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '16px',
                color: '#0078ff',
                marginBottom: '10px',
              }}
            >
              {item.startDate} {item.endDate ? ` - ${item.endDate}` : ''}
            </Typography>
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#0078ff',
                marginBottom: '8px',
              }}
            >
              {item.jobTitle}
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                color: '#555',
                marginBottom: '8px',
              }}
            >
              {item.title} -{' '}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#0078ff',
                  textDecoration: 'none',
                }}
              >
                Link
              </a>
            </Typography>
            <Typography sx={{ fontSize: '14px', color: '#777' }}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
