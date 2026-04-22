import HeroCarousel from "../components/HeroCarousel";
import HomeContent from "../components/HomeContent";
import TabList from "../components/TabList";

const HomePage = () => {
  
  return (
    <>
      <HeroCarousel />
      <div className="mx-4 py-10 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-60 min-h-dvh">
        <HomeContent/>
      </div>
    </>
  );
};

export default HomePage;
