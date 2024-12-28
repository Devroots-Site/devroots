import { Box, Typography } from '@mui/material';
import headerSectionLogo from '../../assets/headerSectionLogo.png';
import { HeaderSectionProps } from './HeaderSection.type';

export default function HeaderSection({
  title,
  subtitle,
  srcPath,
  rounded,
}: HeaderSectionProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(to bottom, #66ccff, #0066cc)',
        padding: { xs: '20px', md: '40px 60px' },
        color: '#fff',
        marginTop: '56px',
      }}
    >
      {/* Left Section: Text Content */}
      <Box
        sx={{
          maxWidth: { xs: '100%', md: '50%' },
          textAlign: { xs: 'center', md: 'left' },
          marginBottom: { xs: '20px', md: '0' },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            marginBottom: '16px',
            fontSize: { xs: '24px', md: '36px' },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '16px', md: '18px' },
            lineHeight: '1.6',
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      {/* Right Section: Image */}
      <Box
        sx={{
          maxWidth: { xs: '100%', md: '40%' },
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src={srcPath || headerSectionLogo}
          alt="Developer Computer"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            borderRadius: rounded ? '50%' : '0',
            overflow: 'hidden',
          }}
        />
      </Box>
    </Box>
  );
}
