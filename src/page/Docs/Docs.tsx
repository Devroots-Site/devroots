import { Box } from '@mui/material';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import DocsList from '../../features/DocList/DocList';
import HeaderSection from '../../features/HeaderSection/HeaderSection';

export default function Docs() {
  return (
    <Box sx={{ marginX: '24px', marginTop: '24px' }}>
      <Navbar />
      <HeaderSection
        title="Documentation"
        subtitle="Explore tools, guides, and resources designed to make coding simpler and more productive for every developer"
      />
      <DocsList />
      <Footer />
    </Box>
  );
}
