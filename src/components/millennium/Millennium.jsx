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
  gap: var(--gap-xlarge);
  background-color: transparent;
  text-align: center;
`;

const Title = styled.span`
  font-size: var(--font-medium);
  background-color: transparent;
`;

const SubTitle = styled.span`
  font-size: var(--font-small);
  background-color: transparent;
`;

const StyledButton = styled.a`
  background-color: transparent;
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

        <SubTitle>A respected and trustworthy real estate company.</SubTitle>
        <StyledButton
          href="https://m2krealty.org"
          target="_blank"
          rel="noreferrer"
        >
          <Button>Visit Millennium 2000</Button>
        </StyledButton>
      </MillenniumDetails>
    </StyledMillennium>
  );
}

export default Millennium;
