import About from '../../components/about/About';
import Houses from '../../components/houses/Houses';
import Landing from '../../components/landing/Landing';
import Work from '../../components/work/Work';
import Navigation from '../../navigation/Navigation';
import Banner from '../../ui/banners/Banner';

function Home() {
  return (
    <>
      <div className="container">
        <Navigation />
        <Landing />
        <About />
        <Work />
        <div className="banner-container">
          <Banner />
        </div>
      </div>
      <Houses />
    </>
  );
}

export default Home;
