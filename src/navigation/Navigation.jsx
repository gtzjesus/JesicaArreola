// File: Navigation.js
// Description: React navigation Component (header).
// LazyLoading from React for optimization (images & web app loading time).
// Global Styles from /src/styles/ used for global variables.
// useNavigate react hook to navigate react router (links)

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import styled from 'styled-components';
import { useNavigate } from 'react-router';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledNav = styled.nav`
  // Code logic to arrange children
  display: flex;
  align-items: center;
  justify-content: space-between;
  // Code logic for positioning fixed in all web app + header config
  position: fixed;
  background: transparent;
  width: var(--width-full-window);
  z-index: var(--z-top);
  height: var(--height-navigation);
  font-size: var(--font-xxxsmall);
`;

const Logo = styled.span`
  // Code logic to arrange children
  padding: 0 0 0 var(--padding-small);

  // Code logic to modify logo
  height: var(--logo-height);
`;

const Menu = styled.a`
  // Code logic for contact link a element
  display: inline-block;
  padding: 8px 16px;
  background-color: black;
  color: white;
  border-radius: 20px; /* Adjust the value to control the roundness of the button */
  text-align: center;
  text-decoration: none;
  margin: 0 var(--padding-xsmall);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Navigation() {
  // Grab react hook to navigate the router
  const navigate = useNavigate();

  // Handles the navigation to home page
  function handleHome() {
    navigate('/');
  }
  return (
    <>
      {/* <!-- Nav Container , the header --> */}
      <StyledNav>
        {/* <!--  Container for logo and title --> */}
        <Logo onClick={handleHome}></Logo>
        {/* <!-- Menu Container for links --> */}
        <Menu>Menu</Menu>
      </StyledNav>
    </>
  );
}

// Export the Component (reusable)
export default Navigation;
