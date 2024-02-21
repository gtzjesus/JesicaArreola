// ------------------------------
// File: Banner.js
// ------------------------------
// Description: React component for displaying moving horizontal banner with multiple texts HOUSES.
// ------------------------------

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.
import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.
// Define keyframes for the moving animation
const moveText = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// Styled components for the banner and text elements
const StyledBanner = styled.div``;

const TextContainer = styled.div`
  display: flex;

  animation: ${moveText} ${(props) => props.animationDuration}s linear infinite; /* Apply animation */
`;

const Text = styled.div`
  font-size: var(--font-xxlarge);
  padding-right: 15rem;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data
function Banner() {
  const textContainerRef = useRef(null);
  const [containerWidth, setContainerWidth] = React.useState(0);

  useEffect(() => {
    if (textContainerRef.current) {
      setContainerWidth(textContainerRef.current.offsetWidth);
    }
  }, []);
  return (
    <StyledBanner>
      <TextContainer
        ref={textContainerRef}
        containerWidth={containerWidth}
        animationDuration={containerWidth / 100}
      >
        <Text>Houses</Text>
        <Text>Houses</Text>
        <Text>Houses</Text>
        <Text>Houses</Text>
        <Text>Houses</Text>
      </TextContainer>
    </StyledBanner>
  );
}

// Export the Component (reusable)
export default Banner;
