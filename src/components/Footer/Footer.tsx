import { Box, Typography, Link } from '@mui/material';
import logo from '../../assets/logo.png';
import instagram from '../../assets/instagram.png';
import linkedIn from '../../assets/linkedin.png';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#1C5D99',
        color: '#fff',
        padding: { xs: '40px 20px', sm: '60px 40px' }, // Responsive padding
        textAlign: 'center',
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
        marginTop: '56px',
      }}
    >
      {/* Logo and Title */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '30px',
          gap: '15px',
          flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: '80px', height: '80px' }} // Responsive logo size
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontSize: { xs: '24px', sm: '28px', md: '32px' }, // Responsive font size
          }}
        >
          Devroots
        </Typography>
      </Box>

      {/* Footer Links */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1000px',
          margin: '0 auto',
          flexWrap: 'wrap', // Wrap items for smaller screens
          gap: '20px', // Adjust gap for responsiveness
        }}
      >
        {/* Copyright */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '16px', sm: '18px' }, // Responsive font size
            textAlign: { xs: 'center', md: 'left' }, // Center text on small screens
          }}
        >
          © {new Date().getFullYear()} All rights reserved. Devroots
        </Typography>

        {/* Instagram Link */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            justifyContent: 'center', // Center icons on small screens
          }}
        >
          <img
            src={instagram}
            alt="Instagram Logo"
            style={{ width: '30px', height: '30px' }}
          />
          <Link
            href="https://www.instagram.com/einfachbasde/"
            color="inherit"
            underline="hover"
            target="_blank"
            rel="noopener"
            sx={{
              fontSize: { xs: '16px', sm: '18px' }, // Responsive link text size
            }}
          >
            Instagram: EinfachBaste
          </Link>
        </Box>

        {/* LinkedIn Link */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            justifyContent: 'center', // Center icons on small screens
          }}
        >
          <img
            src={linkedIn}
            alt="LinkedIn Logo"
            style={{ width: '30px', height: '30px' }}
          />
          <Link
            href="https://www.linkedin.com/in/bastian-bichler-3645b0299/"
            color="inherit"
            underline="hover"
            target="_blank"
            rel="noopener"
            sx={{
              fontSize: { xs: '16px', sm: '18px' }, // Responsive link text size
            }}
          >
            LinkedIn: Bastian Bichler
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
