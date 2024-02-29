import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--font-small);
  color: #666;
  margin-top: var(--margin-medium);
`;

const Copyright = styled.a`
  font-size: var(--font-xxxsmall);
  padding-bottom: var(--padding-xsmall);
`;

function Footer() {
  return (
    <StyledFooter>
      <Copyright href="https://www.worldhello.us" target="_blank">
        &copy; {new Date().getFullYear()} WorldHello
      </Copyright>
    </StyledFooter>
  );
}

export default Footer;
