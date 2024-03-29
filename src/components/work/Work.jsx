// ------------------------------
// File: Work.js
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
  font-size: var(--font-small);
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
  opacity: 0.7;
`;

const VerticalLine = styled.div`
  border-left: 1px solid var(--color-black); /* Adjust thickness and color as needed */
  height: auto; /* Set height to auto to match content height */
  margin: 15px; /* Adjust spacing as needed */
  opacity: 0.5;
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
      </StyledWork>
      <StyledWork>
        <Section>
          <Content>
            <ContentTitle>
              Property <br /> Valuation
            </ContentTitle>
            <br />
            <br />

            <ContentDescription>
              Assist buyers in making smart purchase decisions and help sellers
              determine the best listing prices.
            </ContentDescription>
          </Content>
        </Section>
        <VerticalLine />
        <Section>
          <Content>
            <ContentTitle>
              Market <br /> Analysis
            </ContentTitle>
            <br />
            <br />

            <ContentDescription>
              Assist clients in the housing market, look for trends, and make
              strategic investment decisions.
            </ContentDescription>
          </Content>
        </Section>
      </StyledWork>

      <StyledWork>
        <Section>
          <Content>
            <ContentTitle>
              Negotiation
              <br /> Expertise
            </ContentTitle>
            <br />
            <br />

            <ContentDescription>
              Negotiate on behalf of clients with price, terms of sale, and
              contract details.
            </ContentDescription>
          </Content>
        </Section>
        <VerticalLine />
        <Section>
          <Content>
            <ContentTitle>
              Property <br /> Marketing
            </ContentTitle>
            <br />
            <br />

            <ContentDescription>
              Create effective marketing strategies to showcase properties to
              potential buyers.
            </ContentDescription>
          </Content>
        </Section>
      </StyledWork>
      <hr />
    </>
  );
}

export default Work;
