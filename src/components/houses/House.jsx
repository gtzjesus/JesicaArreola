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
  // Code logic to rotate videos that are horizontal for my designs
  transform: rotate(90deg);
  // Code logic to display every design side-by-side
  display: inline-block;
  overflow: hidden;
  height: fit-content;
  width: var(--width-filled-window);

  // @MEDIAQUERY logic for smaller devices
  @media (max-width: 39.25em) {
    width: 100vw;
    height: 65vh;
  }

  // @MEDIAQUERY logic for smaller devices
  @media (min-width: 40.25em) {
    width: 100vw;
    height: 80vh;
  }
  // @MEDIAQUERY logic for medium devices
  @media (min-width: 78.25em) {
    width: 100vw;
    height: 80vh;
  }
  // @MEDIAQUERY logic for bigger devices
  @media (min-width: 150.15em) {
    width: 100vw;
    height: 75vh;
  }
`;

const Video = styled.video`
  // Code logic to style video (mp4)
  width: 100%;
  height: 100%;
`;

const Address = styled.div`
  font-size: var(--font-medium);
`;

const Price = styled.div`
  font-size: var(--font-medium);
`;

const Beds = styled.div`
  font-size: var(--font-medium);
`;

const Baths = styled.div`
  font-size: var(--font-medium);
`;

const Sqft = styled.div`
  font-size: var(--font-medium);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the every individual design added to supabase

function House({ house }) {
  console.log(house);
  const completeHouse = {
    id: house.id,
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
        <source src={completeHouse.video} type="video/mp4" />
      </Video>
      <Address>{completeHouse.address}</Address>
      <Price>{completeHouse.price}</Price>
      <Beds>{completeHouse.beds}</Beds>
      <Baths>{completeHouse.baths}</Baths>
      <Sqft>{completeHouse.sqft}</Sqft>
    </StyledHouse>
  );
}

// Export reusable Individual Design component
export default House;
