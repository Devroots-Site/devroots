import { Box } from '@mui/material';
import DocsList from 'src/features/DocList/DocList';
import HeaderSection from 'src/components/HeaderSection/HeaderSection';
import Navbar from '@/components/Navbar';

export default function DocumentationPage() {
    return (
        <Box sx={{ marginX: '24px', marginTop: '24px' }}>
            <Navbar />
            <HeaderSection
                title="Documentation"
                subtitle="Explore tools, guides, and resources designed to make coding simpler and more productive for every developer (for the time being in german)."
            />
            <DocsList />
        </Box>
    );
}
