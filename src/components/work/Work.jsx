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
  padding: 0 var(--padding-small);
  display: inline-flex; /* Use inline-flex to shrink-wrap contents vertically */
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%; /* Set the height to 100% to fill the parent container */

  padding: 0 0 var(--padding-small) 0;
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

const ContentTitle = styled.span``;

const ContentDescription = styled.span`
  font-size: var(--font-tiny);
`;

const VerticalLine = styled.div`
  border-left: 1px solid var(--color-black); /* Adjust thickness and color as needed */
  height: auto; /* Set height to auto to match content height */
  margin: 20px; /* Adjust spacing as needed */
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data
function Work() {
  return (
    <>
      <hr />
      <StyledWork>
        <Section>
          <Title>What I do</Title>
          <Icon src="/icons/downarrow.png"></Icon>
        </Section>

        <VerticalLine />
        <Section>
          <Content>
            <ContentTitle>Property Valuation</ContentTitle>
            <br />
            <br />

            <ContentDescription>
              Help sellers determine the optimal listing price and assist buyers
              in making smart purchase decisions.
            </ContentDescription>
          </Content>
        </Section>
        <VerticalLine />
        <Section>
          <Content>
            <ContentTitle>Analysis</ContentTitle>
            <br />
            <br />

            <ContentDescription>
              Assist clients in market dynamics, predict future trends, and make
              strategic investment decisions.
            </ContentDescription>
          </Content>
        </Section>
      </StyledWork>
    </>
  );
}

export default Work;
