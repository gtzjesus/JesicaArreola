// ------------------------------
// File: Millennium.js
// ------------------------------
// Description: React component for displaying content.
// ------------------------------

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.
import styled from 'styled-components';

// ------------------------------
// Styled Components
// ------------------------------
// This section has all CSS styles configured for every HTML element.
const StyledMillennium = styled.div`
  background-image: url('backgrounds/millennium.jpg');
  background-size: cover;
  color: var(--color-white);

  // COVER THE FULL SCREEN OF EVERY DEVICE
  min-height: 100vh;
  min-width: 100vw;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data
function Millennium() {
  return <StyledMillennium></StyledMillennium>;
}

export default Millennium;
