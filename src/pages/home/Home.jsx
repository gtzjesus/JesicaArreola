import About from '../../components/about/About';
import Houses from '../../components/houses/Houses';
import Landing from '../../components/landing/Landing';
import Work from '../../components/work/Work';
import Navigation from '../../navigation/Navigation';

function Home() {
  return (
    <>
      <Navigation />
      <Landing />
      <About />
      <Work />
      <Houses />
    </>
  );
}

export default Home;
