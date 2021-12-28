import styled from "styled-components";

export const NavStyled = styled.nav`
  font-size: ${({ theme }) => theme.fontsizes.medium};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  & a {
    color: ${({ theme }) => theme.colors.lavenderblue};
    margin: 5px;
    font-family: ${({ theme }) => theme.fonts.dmsans};
    text-decoration: none;
    padding: 10px;
    :hover {
      color: ${({ theme }) => theme.colors.cameopink};
    }
    :focus-visible {
      outline: 2px dashed ${({ theme }) => theme.colors.cameopink};
      outline-offset: 3px;
    }
  }
  @media ${({ theme }) => theme.mediaQueries.mobileL} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.colors.cameopink};
    min-height: 100vh;
    width: 100vw;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ menuOpen }) =>
      menuOpen ? "translateX(-100)" : "translateX(100%)"};
    & a {
      color: ${({ theme }) => theme.colors.darkblue};
      font-size: ${({ theme }) => theme.fontsizes.large};
      :hover {
        color: ${({ theme }) => theme.colors.oxfordblue};
      }
    }
  }
`;
