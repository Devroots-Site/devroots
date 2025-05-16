import { useState } from 'react';
import { Box, Typography, Button, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from 'src/assets/logo.png';
import { Link } from 'react-router-dom';
import CTAButton from 'src/components/CTAButton/CTAButton';

export default function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

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
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Devroots
                    </Link>
                </Typography>
            </Box>

            {/* Desktop Navigation Links */}
            <Box
                sx={{
                    display: { xs: 'none', md: 'flex' }, // Hidden on small screens
                    gap: '20px',
                    alignItems: 'center',
                }}
            >
                <Typography variant="body1" sx={{ cursor: 'pointer' }}>
                    <Link to="/docs" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Docs
                    </Link>
                </Typography>
                <Typography variant="body1" sx={{ cursor: 'pointer' }}>
                    <Link to="/tools" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Tools
                    </Link>
                </Typography>
                <Typography variant="body1" sx={{ cursor: 'pointer' }}>
                    <Link to="/aboutme" style={{ textDecoration: 'none', color: 'inherit' }}>
                        About me
                    </Link>
                </Typography>
                <Typography variant="body1" sx={{ cursor: 'pointer' }}>
                    <Link to="/websites" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Websites
                    </Link>
                </Typography>

                <CTAButton label="Contact now" href="mailto:bichlerbastian@gmail.com" />
            </Box>

            {/* Mobile Hamburger Menu */}
            <IconButton
                sx={{
                    display: { xs: 'block', md: 'none' }, // Shown on small screens
                }}
                onClick={toggleDrawer}
            >
                <MenuIcon sx={{ fontSize: '30px', color: '#0078ff' }} />
            </IconButton>

            {/* Drawer for Mobile Navigation */}
            <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
                <Box
                    sx={{
                        width: '250px',
                        height: '100%',
                        backgroundColor: '#f9f9f9',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                    }}
                >
                    {/* Close Button */}
                    <IconButton
                        onClick={toggleDrawer}
                        sx={{ alignSelf: 'flex-end' }}
                        aria-label="open drawer"
                    >
                        <CloseIcon sx={{ fontSize: '30px', color: '#0078ff' }} />
                    </IconButton>

                    {/* Mobile Navigation Links */}
                    <Typography variant="body1" sx={{ cursor: 'pointer' }}>
                        <Link to="/docs" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Docs
                        </Link>
                    </Typography>
                    <Typography variant="body1" sx={{ cursor: 'pointer' }}>
                        <Link to="/tools" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Tools
                        </Link>
                    </Typography>
                    <Typography variant="body1" sx={{ cursor: 'pointer' }}>
                        <Link to="/aboutme" style={{ textDecoration: 'none', color: 'inherit' }}>
                            About me
                        </Link>
                    </Typography>
                    <Typography variant="body1" sx={{ cursor: 'pointer' }}>
                        <Link to="/websites" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Websites
                        </Link>
                    </Typography>
                    <Button
                        variant="outlined"
                        sx={{
                            borderRadius: '20px',
                            textTransform: 'none',
                            padding: '5px 15px',
                            alignSelf: 'flex-start',
                        }}
                    >
                        Contact Now
                    </Button>
                </Box>
            </Drawer>
        </Box>
    );
}
