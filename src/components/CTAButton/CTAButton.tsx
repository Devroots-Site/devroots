import { Button } from '@mui/material';
import { CTAButtonType } from './CTAButton.type';

export default function CTAButton({ label, href = '#' }: CTAButtonType) {
    return (
        <Button
            sx={{
                borderRadius: '30px',
                padding: '12px 24px',
                fontWeight: 'bold',
                fontSize: '16px',
                textTransform: 'none',
                background: 'linear-gradient(75deg, #1C5D99, #0C1824)',
                color: '#fff',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.3)',
                },
            }}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {label}
        </Button>
    );
}
