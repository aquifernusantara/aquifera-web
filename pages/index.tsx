import Layout from '@components/common/Layout';
import LandingPage from '@components/landing-page';

export default function Home() {
  return (
    <Layout>
      <LandingPage.Hero />
      <LandingPage.IntroducingMekarlaksana />
      <LandingPage.HowWeWork />
      <LandingPage.OurMission />
    </Layout>
  );
}
