import Footer from '@/components/footer';
import Form from '@/components/landing/form';
import Heroes from '@/components/landing/heroes';
import Team from '@/components/landing/team';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta title="Yody" description="Yody" />
      }
    >
      <Heroes />
      <Form />
      {/* <Uploader /> */}
      <Team />
      <Footer />
    </Main>
  );
};

export default Index;
