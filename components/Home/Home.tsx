import Hero from './modules/components/Hero';
import HowWeWork from './modules/components/HowWeWork';
import IntroducingMekarlaksana from './modules/components/IntroducingMekarlaksana';
import OurMission from './modules/components/OurMission';

const Home = () => {
  return (
    <>
      <Hero />
      {/* <IntroducingMekarlaksana /> */}
      <HowWeWork />
      <OurMission />
    </>
  );
};

export default Home;
