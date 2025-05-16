import { Box } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import Footer from '../../components/Footer';
import ToolsList from '../../features/ToolsList/ToolList';

export default function Tools() {
    return (
        <Box sx={{ marginX: '24px', marginTop: '24px' }}>
            <Navbar />
            <HeaderSection
                title="Discover Powerful Tools"
                subtitle="Explore a curated collection of tools designed to simplify coding, enhance productivity, and unlock your creative potential."
            />
            <ToolsList />
            <Footer />
        </Box>
    );
}
