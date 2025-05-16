import { Box } from '@mui/material';
import Navbar from '@/components/Navbar';
import HeaderSection from 'src/components/HeaderSection/HeaderSection';
import ToolsList from '@/features/ToolsList/ToolList';

export default function ToolsPage() {
    return (
        <Box sx={{ marginX: '24px', marginTop: '24px' }}>
            <Navbar />
            <HeaderSection
                title="Discover Powerful Tools"
                subtitle="Explore a curated collection of tools designed to simplify coding, enhance productivity, and unlock your creative potential."
            />
            <ToolsList />
        </Box>
    );
}
