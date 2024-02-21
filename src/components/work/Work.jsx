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
// Styled Components
// ------------------------------
// This section has all CSS styles configured for every HTML element.
const StyledWork = styled.div`
  padding: var(--height-navigation) var(--padding-small);
  display: inline-flex; /* Use inline-flex to shrink-wrap contents vertically */
  height: 50vh;
  width: 100vw;
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const Title = styled.div`
  flex: 1;
  /* Add your title styles here */
`;

const Icon = styled.img`
  height: var(--logo-height);
`;

const Content = styled.div`
  flex: 1;
  /* Add your content styles here */
`;

const Additional = styled.div`
  flex: 1;
  /* Add your additional content styles here */
`;

const VerticalLine = styled.div`
  border-left: 1px solid var(--color-black); /* Adjust thickness and color as needed */
  height: 100%; /* Set height to match the height of the container */
  margin: 0 20px; /* Adjust spacing as needed */
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data
function Work() {
  return (
    <StyledWork>
      <Section>
        <Title>Title</Title>
        <hr />

        <Icon src="/icons/downarrow.png"></Icon>
      </Section>
      <VerticalLine />
      <Section>
        <Content>Content</Content>
      </Section>
      <VerticalLine />
      <Section>
        <Additional>Additional</Additional>
      </Section>
    </StyledWork>
  );
}

export default Work;
