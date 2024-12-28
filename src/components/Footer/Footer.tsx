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
        padding: '60px 40px', // Increased padding
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
          marginBottom: '30px', // Added more spacing
          gap: '15px',
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: '90px', height: '90px' }} // Increased logo size
        />
        <Typography
          variant="h4" // Larger font size for the title
          sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
        >
          Devroots
        </Typography>
      </Box>

      {/* Footer Links */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1000px', // Increased width
          margin: '0 auto',
          flexWrap: 'wrap',
          gap: '30px', // Increased gap between items
        }}
      >
        {/* Copyright */}
        <Typography variant="body1" sx={{ fontSize: '18px' }}>
          {' '}
          {/* Larger font size */}© {new Date().getFullYear()} All rights
          reserved. Devroots
        </Typography>

        {/* Instagram Link */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <img
            src={instagram}
            alt="Instagram Logo"
            style={{ width: '30px', height: '30px' }} // Increased icon size
          />
          <Link
            href="https://www.instagram.com/einfachbasde/"
            color="inherit"
            underline="hover"
            target="_blank"
            rel="noopener"
            sx={{
              fontSize: '18px', // Larger link text
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
          }}
        >
          <img
            src={linkedIn}
            alt="LinkedIn Logo"
            style={{ width: '30px', height: '30px' }} // Increased icon size
          />
          <Link
            href="https://www.linkedin.com/in/bastian-bichler-3645b0299/"
            color="inherit"
            underline="hover"
            target="_blank"
            rel="noopener"
            sx={{
              fontSize: '18px', // Larger link text
            }}
          >
            LinkedIn: Bastian Bichler
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
