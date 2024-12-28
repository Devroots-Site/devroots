import { Box, Typography } from '@mui/material';
import headerSectionLogo from '../../assets/headerSectionLogo.png';

type HeaderSectionProps = {
  title: string;
  subtitle: string;
  srcPath?: string;
  rounded?: boolean;
};

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
        flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on larger
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(to bottom, #66ccff, #0066cc)',
        padding: { xs: '20px', md: '40px 60px' }, // Adjust padding for smaller screens
        color: '#fff',
        marginTop: '56px',
      }}
    >
      {/* Left Section: Text Content */}
      <Box
        sx={{
          maxWidth: { xs: '100%', md: '50%' }, // Full width on small screens, half on larger
          textAlign: { xs: 'center', md: 'left' }, // Center text on small screens
          marginBottom: { xs: '20px', md: '0' }, // Add margin on small screens
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            marginBottom: '16px',
            fontSize: { xs: '24px', md: '36px' }, // Smaller font size on small screens
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '16px', md: '18px' }, // Smaller font size on small screens
            lineHeight: '1.6',
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      {/* Right Section: Image */}
      <Box
        sx={{
          maxWidth: { xs: '100%', md: '40%' }, // Full width on small screens, reduced width on larger
          display: 'flex',
          justifyContent: 'center', // Center image on small screens
        }}
      >
        <img
          src={srcPath || headerSectionLogo}
          alt="Developer Computer"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            borderRadius: rounded ? '50%' : '0', // Makes the picture round if rounded is true
            overflow: 'hidden', // Ensures proper clipping of the image if rounded is true
          }}
        />
      </Box>
    </Box>
  );
}
