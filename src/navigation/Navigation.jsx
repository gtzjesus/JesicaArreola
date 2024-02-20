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
import { useState } from 'react';

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

const Menu = styled.button`
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

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  transition: left 0.3s ease-in-out;
  z-index: 999;
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const MenuItem = styled.a`
  display: inline-block;
  padding: 8px 16px;
  background-color: black;
  color: white;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  margin: 8px;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Navigation() {
  // Check to see if menu is open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle toggle for button menu
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      {/* <!-- Nav Container , the header --> */}
      <StyledNav>
        {/* <!--  Container for logo and title --> */}
        <Logo></Logo>
        {/* <!-- Menu Container for links --> */}
        <Menu onClick={toggleMenu}> {isMenuOpen ? 'Exit' : 'Menu'}</Menu>
      </StyledNav>
      <MenuContainer isOpen={isMenuOpen}>
        <MenuContent>
          <MenuItem href="#">Contact</MenuItem>

          {/* Add more menu items as needed */}
        </MenuContent>
      </MenuContainer>
    </>
  );
}

// Export the Component (reusable)
export default Navigation;
