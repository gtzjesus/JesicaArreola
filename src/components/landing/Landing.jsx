// ------------------------------
// File: Landing.js
// ------------------------------
// Description: React component for displaying landing page (first thing USER sees).
// ------------------------------

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.
import styled from 'styled-components';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.
const StyledLanding = styled.div`
  padding: var(--height-navigation) 0;
`;

const Title = styled.span`
  font-size: var(--font-large);
  padding: 0 var(--padding-small);
`;

const Scroll = styled.div`
  // Code logic to arrange children
  display: flex;
  align-items: center;
  justify-content: space-between;
  // Code logic for positioning fixed in all web app + header config
  max-width: 600px; /* Adjust as needed */
  // Padding for all
  padding: var(--padding-small) 0;
`;

const SubTitle = styled.span`
  padding-right: var(--padding-small);
`;

const Hint = styled.div`
  display: flex;
  padding-left: var(--padding-small);
`;

const Element = styled.div``;

const Icon = styled.img`
  height: var(--logo-height);
  padding-left: var(--padding-xxsmall);
`;

const Realtor = styled.div`
  // Code logic for setting the background
  // Design background from Figma software
  background: url('backgrounds/jesica.png');
  background-size: cover;

  height: 50vh;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data
function Landing() {
  return (
    <StyledLanding>
      <Title>Jesica Arreola</Title>
      <br />

      <Title>Realtor</Title>
      <br />
      <Scroll>
        <Hint>
          <Element>Millennium 2000</Element>
          <Element>
            <Icon src="/icons/realestate.png"></Icon>
          </Element>
        </Hint>
        <SubTitle>(Texas, United States)</SubTitle>
      </Scroll>
      <Realtor></Realtor>
    </StyledLanding>
  );
}

// Export the Component (reusable)
export default Landing;
