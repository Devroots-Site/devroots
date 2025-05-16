import { Box, Typography, Link } from '@mui/material';
import logo from '../assets/logo.png';
import instagram from '../assets/instagram.png';
import linkedIn from '../assets/linkedin.png';

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: '#1C5D99',
                color: '#fff',
                padding: { xs: '40px 20px', sm: '60px 40px' },
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
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <img src={logo} alt="Logo" style={{ width: '80px', height: '80px' }} />
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        fontSize: { xs: '24px', sm: '28px', md: '32px' },
                    }}
                >
                    Devroots
                </Typography>
            </Box>

            {/* Footer Links */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    flexWrap: 'wrap',
                    gap: '20px',
                }}
            >
                {/* Copyright */}
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: '16px', sm: '18px' },
                        textAlign: { xs: 'center', md: 'left' },
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
                        justifyContent: 'center',
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
                            fontSize: { xs: '16px', sm: '18px' },
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
                        justifyContent: 'center',
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
                            fontSize: { xs: '16px', sm: '18px' },
                        }}
                    >
                        LinkedIn: Bastian Bichler
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}
