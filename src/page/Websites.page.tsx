import { Box } from '@mui/material';
import Navbar from '@/components/Navbar';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import WebsiteList from '@/features/WebsiteList/WebsiteList';

export default function WebsitesPage() {
    return (
        <Box sx={{ marginX: '24px', marginTop: '24px' }}>
            <Navbar />
            <HeaderSection title="Websites" subtitle="Nice to Know Websites" />
            <WebsiteList />
        </Box>
    );
}
