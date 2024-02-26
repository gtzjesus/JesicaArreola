/* eslint-disable react/prop-types */
// ------------------------------
// File: Design.js
// ------------------------------
// Description: React individual component for each achievement done by WorldHello (the design videos will be displayed with this reusable component dynamically), using supabase integration (backend)
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
  height: fit-content;
  width: 100vw;
  color: var(--color-black);
`;

const Video = styled.video`
  // Code logic to style video (mp4)
  width: 100%;
  height: 100%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Address = styled.span`
  font-size: var(--font-xsmall);
`;

const Price = styled.span`
  font-size: var(--font-medium);
`;

const Beds = styled.span`
  font-size: var(--font-small);
`;

const Baths = styled.span`
  font-size: var(--font-small);
`;

const Sqft = styled.span`
  font-size: var(--font-small);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the every individual design added to supabase

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
        <Price>{Home.price}</Price>
        <Beds>{Home.beds}</Beds>
        <Baths>{Home.baths}</Baths>
        <Sqft>{Home.sqft}</Sqft>
      </Details>
    </StyledHouse>
  );
}

// Export reusable Individual Design component
export default House;