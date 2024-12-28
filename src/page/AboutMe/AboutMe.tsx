import { Box } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import HeaderSection from '../../features/HeaderSection/HeaderSection';
import Iam from '../../assets/iam.jpeg';
import Timeline from '../../features/TimeLine/TimeLine';
import Footer from '../../components/Footer/Footer';

export default function AboutMe() {
  const timelineData = [
    {
      startDate: '2024-09-02',
      endDate: undefined,
      title: 'Digital Rally GmbH',
      jobTitle: 'Software Engineer',
      description: 'Developing high-quality software solutions.',
      link: 'https://digital-rally.de/',
    },
    {
      startDate: '2022-09-12',
      endDate: '2024-02-23',
      title: 'EDV-Schule Deggendorf',
      jobTitle: 'State-certified business IT specialist',
      description: 'Specialized training in business information systems.',
      link: 'https://edvschule-plattling.de/',
    },
    {
      startDate: '2021-12-24',
      endDate: '2022-09-12',
      title: 'Zillinger Osterhofen',
      jobTitle: 'Warehouse clerk',
      description: 'Wrok as a warehouse clerk.',
      link: 'https://edv-schule-deggendorf.de',
    },
    {
      startDate: '2021-07-01',
      endDate: '2021-12-24',
      title: 'Zillinger Osterhofen',
      jobTitle: 'Warehouse clerk',
      description: 'Wrok as a warehouse clerk.',
      link: 'https://www.zillinger.de/niederlassungen/osterhofen/',
    },
    {
      startDate: '2017-09-01',
      endDate: '2020-09-01',
      title: 'KiK Textilien und Non-Food GmbH',
      jobTitle: 'Warehouse clerk',
      description: 'Wrok as a warehouse clerk.',
      link: undefined,
    },
    {
      startDate: '2017-09-01',
      endDate: '2020-09-01',
      title: 'Hirschvogel Plattling',
      jobTitle: 'Warehouse clerk',
      description: 'Wrok as a warehouse clerk.',
      link: 'https://hirschvogel.eu/unternehmen/standort/plattling',
    },
  ];

  return (
    <Box sx={{ marginX: '24px', marginTop: '24px' }}>
      <Navbar />
      <HeaderSection
        title="Bastian Bichler"
        subtitle="Hello, my name is Bastian Bichler and I am a 22-year-old web developer from Bavaria, Germany. I have been actively working in web development since September 2, 2024. As a passionate and dedicated developer, I enjoy creating user-friendly and efficient web applications"
        srcPath={Iam}
        rounded={true}
      />
      <Timeline items={timelineData} />
      <Footer />
    </Box>
  );
}
