import HeroCarousel from "../components/HeroCarousel";
import HomeContent from "../components/HomeContent";
import TabList from "../components/TabList";

const HomePage = () => {
  
  return (
    <>
      <HeroCarousel />
      <div className="px-4 py-10 sm:px-6 md:px-10 lg:px-20 xl:px-64 min-h-dvh">
        <TabList/>
        <HomeContent/>
      </div>
    </>
  );
};

export default HomePage;
