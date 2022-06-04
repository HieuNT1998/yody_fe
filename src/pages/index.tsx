import Footer from '@/components/footer';
import Form from '@/components/landing/form';
import Heroes from '@/components/landing/heroes';
import LandingFeatures from '@/components/landing/LandingFeatures';
import LandingHiring from '@/components/landing/LandingHiring';
import Team from '@/components/landing/team';
import Uploader from '@/components/landing/upload';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  var user = {
    vp1: "",
    vp2: "",
    kcVP1: "",
    kcVP2: "",
    chieuCao: "",
    canNang: "",
    thayCa: "",
  }
  function _onChangeUserInfor(e: any) {
    user = e;
  }
  return (
    <Main
      meta={
        <Meta title="Yody" description="Yody" />
      }
    >
      <Heroes />
      <Form />
      <Uploader />
      <Team />
      <Footer />
    </Main>
  );
};

export default Index;
