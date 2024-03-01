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
  padding: var(--padding-xxlarge) var(--padding-medium);

  // COVER THE FULL SCREEN OF EVERY DEVICE
`;

const Title = styled.span`
  font-size: var(--font-medium);
  background-color: var(--color-black);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data
function Millennium() {
  return (
    <StyledMillennium>
      <Title>Millennium is deeply involved with the El Paso community.</Title>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Title>Millennium is deeply involved with the El Paso community.</Title>
    </StyledMillennium>
  );
}

export default Millennium;
