import { Box } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import HeaderSection from '../../features/HeaderSection/HeaderSection';
import WebsiteList from '../../features/WebsiteList/WebsiteList';
import Footer from '../../components/Footer/Footer';

export default function Websites() {
  return (
    <Box sx={{ marginX: '24px', marginTop: '24px' }}>
      <Navbar />
      <HeaderSection title="Websites" subtitle="Nice to Know Websites" />
      <WebsiteList />
      <Footer />
    </Box>
  );
}
