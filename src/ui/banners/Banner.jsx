// ------------------------------
// File: Banner.js
// ------------------------------
// Description: React component for displaying moving horizontal banner with multiple texts HOUSES.
// ------------------------------

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.
import styled, { keyframes } from 'styled-components';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.
const moveText = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// Styled components for the text container and text elements
const TextContainer = styled.div`
  width: fit-content;
  overflow: hidden; /* Hide overflow to prevent horizontal scrollbar */
  display: flex;
  white-space: nowrap;
  animation: ${moveText} 15s linear infinite; /* Apply animation */
`;

const Text = styled.div`
  font-size: var(--font-xxlarge);
  padding-right: 100px; /* Adjust spacing between texts */
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data
function Banner() {
  return (
    <TextContainer>
      <Text>Houses</Text>
      <Text>Houses</Text>
      <Text>Houses</Text>
      <Text>Houses</Text>
      <Text>Houses</Text>
    </TextContainer>
  );
}

// Export the Component (reusable)
export default Banner;
