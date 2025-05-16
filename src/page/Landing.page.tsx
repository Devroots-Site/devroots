import { Box } from '@mui/material';
import Navbar from 'src/components/Navbar';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import Features from 'src/features/Feature/Feature';

export default function LandingPage() {
    return (
        <Box sx={{ marginX: '24px', marginTop: '24px' }}>
            <Navbar />
            <HeaderSection
                title=" Your Ultimate Developer Hub"
                subtitle="Explore tools, guides, and resources designed to make coding simpler and more productive for every developer. (for the time being in german)"
            />
            <Features />
        </Box>
    );
}
