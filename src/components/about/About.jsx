// ------------------------------
// File: About.js
// ------------------------------
// Description: React component for displaying about content
// ------------------------------

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this
import styled from 'styled-components';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.
const StyledAbout = styled.div`
  padding: 0 var(--padding-small);
  display: flex; /* Use flexbox to align items */
  height: 50vh;
`;

const Me = styled.div`
  flex: 1.5; /* Take up remaining space */
  font-size: var(--font-medium);
`;

const VerticalLine = styled.div`
  border-left: 1.5px solid var(--color-black); /* Adjust thickness and color as needed */
  height: 100%; /* Ensure the line spans the full height */
  margin: 0 20px; /* Adjust spacing as needed */
`;

const More = styled.div`
  flex: 0.5; /* Take up remaining space */
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data
function About() {
  return (
    <StyledAbout>
      <Me>
        As a real estate agent, I focus on finding you a home that fits your
        lifestyle.
      </Me>
      <VerticalLine />
      <More>About me</More>
    </StyledAbout>
  );
}

// Export the Component (reusable)
export default About;
