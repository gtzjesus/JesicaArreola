/* eslint-disable react/prop-types */
// ------------------------------
// File: House.js
// ------------------------------
// Description: React individual component for each House (the house videos will be displayed with this reusable component dynamically), using supabase integration (backend)
// ------------------------------
// Figma Designs + Video Screen Editor/Recording.
// ------------------------------
// Global Styles from /src/styles/ used for global variables.

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.
import styled from 'styled-components';

const StyledHouse = styled.div`
  // Code logic to display every design side-by-side
  display: inline-block;
  overflow: hidden;
  width: var(--width-filled-window);
`;

const Video = styled.video`
  // Code logic to style video (mp4)
  width: 100%;
  height: 75vh;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  padding: 0 var(--padding-medium);
`;

const Address = styled.span`
  font-size: var(--font-xxxsmall);
`;

const Price = styled.span`
  font-size: var(--font-small);
`;

const Beds = styled.span`
  font-size: var(--font-xsmall);
`;

const Baths = styled.span`
  font-size: var(--font-xsmall);
`;

const Sqft = styled.span`
  font-size: var(--font-xsmall);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the every individual house added to supabase

function House({ house }) {
  // Check if the house object is undefined or null
  if (!house) {
    return <div>No house data available</div>;
  }

  // Destructure the house object or provide default values to prevent errors
  // Code logic to create object (design)
  const Home = {
    address: house.address,
    price: house.price,
    beds: house.beds,
    baths: house.baths,
    sqft: house.sqft,
    video: house.video,
  };

  return (
    <StyledHouse>
      <Video preload="auto" autoPlay loop muted playsInline>
        <source src={Home.video} type="video/mp4" />
      </Video>
      <Details>
        <Address>{Home.address}</Address>
        <Price>${Home.price}</Price>
        <Beds>{Home.beds} beds</Beds>
        <Baths>{Home.baths} baths</Baths>
        <Sqft>{Home.sqft} sqft</Sqft>
      </Details>
    </StyledHouse>
  );
}

// Export reusable Individual Design component
export default House;
