import Footer from '@/components/footer';
import Heroes from '@/components/landing/heroes';
import Team from '@/components/landing/team';
import Uploader from '@/components/landing/upload';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta title="Techainer Dashboard" description="Techainer Dashboard" />
      }
    > 
      <Heroes />
      <Uploader />
      <Team />
      <Footer />
    </Main>
  );
};

export default Index;
