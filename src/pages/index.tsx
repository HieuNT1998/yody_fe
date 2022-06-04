import Footer from '@/components/footer';
import Heroes from '@/components/landing/heroes';
import LandingFeatures from '@/components/landing/LandingFeatures';
import LandingHiring from '@/components/landing/LandingHiring';
import Uploader from '@/components/landing/upload';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta title="Photo Restoration" description="Techainer Photo Restoration" />
      }
    > 
      <Heroes />
      <Uploader />
      <LandingFeatures />
      <LandingHiring />
      <Footer />
    </Main>
  );
};

export default Index;
