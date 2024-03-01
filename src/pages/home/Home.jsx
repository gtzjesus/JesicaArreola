import styled from 'styled-components';
import About from '../../components/about/About';
import Houses from '../../components/houses/Houses';
import Landing from '../../components/landing/Landing';
import Work from '../../components/work/Work';
import Navigation from '../../navigation/Navigation';
import Banner from '../../ui/banners/Banner';
import Form from '../../components/form/Form';
import Footer from '../../footer/Footer';
import Millennium from '../../components/millennium/Millennium';

/* Media query for larger devices */

const ResponsiveContainer = styled.div`
  @media (min-width: 768px) {
    max-width: 600px; /* Adjust as needed */
    margin: 0 auto; /* Center the container horizontally */
    padding: 0 20px;
  }
`;

const BannerContainer = styled.div`
  overflow-x: hidden; /* Hide horizontal overflow */
`;

function Home() {
  return (
    <>
      <Navigation />
      <ResponsiveContainer>
        <Landing />
        <About />
        <Work />
        <BannerContainer>
          <Banner />
        </BannerContainer>
      </ResponsiveContainer>
      <Houses />
      <ResponsiveContainer>
        <Millennium />
        <Form />
        <Footer />
      </ResponsiveContainer>
    </>
  );
}

export default Home;
