import { Box, Typography, Button } from '@mui/material';
import logo from '../../assets/logo.png';
import { Link } from 'react-router';

export default function Navbar() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        boxShadow: 4,
      }}
    >
      {/* Logo and Title */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <img src={logo} width={50} alt="Logo" />
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          <Link to="/">Devroots</Link>
        </Typography>
      </Box>

      {/* Navigation Links */}
      <Box
        sx={{
          display: 'flex',
          gap: '20px',
        }}
      >
        <Typography variant="body1" sx={{ cursor: 'pointer' }}>
          <Link to="/docs" style={{ textDecoration: 'none', color: 'inherit' }}>
            Docs
          </Link>
        </Typography>
        <Typography variant="body1" sx={{ cursor: 'pointer' }}>
          <Link to="/tools">Tools</Link>
        </Typography>
        <Typography variant="body1" sx={{ cursor: 'pointer' }}>
          <Link to="/aboutme">About me</Link>
        </Typography>
        <Typography variant="body1" sx={{ cursor: 'pointer' }}>
          <Link to="/ressources">Resources</Link>
        </Typography>
      </Box>

      {/* Contact Button */}
      <Button
        variant="outlined"
        sx={{
          borderRadius: '20px',
          textTransform: 'none',
          padding: '5px 15px',
        }}
      >
        Contact Now
      </Button>
    </Box>
  );
}
