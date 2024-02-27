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
  display: inline-flex; /* Use inline-flex to shrink-wrap contents vertically */
`;

const Me = styled.div`
  flex: 1.75; /* Take up remaining space */
  font-size: var(--font-medium);
`;

const VerticalLine = styled.div`
  border-left: 1px solid var(--color-black); /* Adjust thickness and color as needed */
  height: auto; /* Set height to auto to match content height */
  margin: 0 20px; /* Adjust spacing as needed */
  opacity: 0.5;
`;

const More = styled.div`
  flex: 0.25; /* Take up remaining space */
  align-self: flex-end; /* Align to the bottom of the flex container */
`;

const Title = styled.span``;

const Link = styled.a`
  position: relative;
`;

const Logo = styled.img`
  height: var(--font-small);
  padding-top: var(--padding-xxsmall);
  color: white;
  @media (min-width: 61.25em) {
    padding: 0 var(--padding-medium) 0 0;
  }
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
      <Title>
        About <br /> me
      </Title>
      <More>
        <br />
        <Link target="_blank" href="https://www.instagram.com/jesicaarlette/">
          {/* <!--  Container for logo and title --> */}
          <Logo src="/icons/instagram.png" alt="instagram"></Logo>
        </Link>
        <br />
        <Link target="_blank" href="https://www.facebook.com/iarlette">
          <Logo src="/icons/facebook.png" alt="facebook"></Logo>
        </Link>
      </More>
    </StyledAbout>
  );
}

// Export the Component (reusable)
export default About;
