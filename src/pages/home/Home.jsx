import About from '../../components/about/About';
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
    </>
  );
}

export default Home;
