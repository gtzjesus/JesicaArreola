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
import Button from '../../ui/buttons/Button';

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

const MillenniumDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-large);
  background-color: var(--color-black);
`;

const Title = styled.span`
  font-size: var(--font-medium);
  background-color: var(--color-black);
`;

const SubTitle = styled.span`
  font-size: var(--font-small);
  background-color: var(--color-black);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data
function Millennium() {
  return (
    <StyledMillennium>
      <MillenniumDetails>
        <Title>
          Millennium 2000 is deeply involved with the El Paso community.
        </Title>

        <SubTitle>
          A respected and trustworthy real estate company in El Paso.
        </SubTitle>
        <Button>
          <a href="https://m2krealty.org" target="_blank" rel="noreferrer">
            Visit Millennium 2000
          </a>
        </Button>
      </MillenniumDetails>
    </StyledMillennium>
  );
}

export default Millennium;
