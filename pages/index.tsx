import { MainLayout } from '@/components/layout';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from '../models';
import { HeroSection } from '@/components/home';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
