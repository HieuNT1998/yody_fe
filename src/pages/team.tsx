import Footer from '@/components/footer';
import Header from '@/components/header';
import Team from '@/components/landing/team';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const TeamPage = () => {
  return (
    <Main
      meta={
        <Meta title="Our Team" description="Our Team" />
      }
    > 
      <Header />
      <Team />
      <Footer />
    </Main>
  );
};

export default TeamPage;
