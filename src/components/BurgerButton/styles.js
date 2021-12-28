import styled from "styled-components";

export const StyledBurger = styled.button`
  display: none;
  @media ${({ theme }) => theme.mediaQueries.mobileL} {
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 2rem;
    justify-content: space-around;
    padding: 0;
    position: absolute;
    right: 2rem;
    top: 5%;
    width: 2rem;
    z-index: 10;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background: ${({ theme, menuOpen }) =>
        menuOpen ? theme.colors.darkblue : theme.colors.cameopink};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      &:first-child {
        transform: ${({ menuOpen }) =>
          menuOpen ? "rotate(45deg)" : "rotate(0)"};
      }
      &:nth-child(2) {
        opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
        transform: ${({ menuOpen }) =>
          menuOpen ? "translateX(20px)" : "translateX(0)"};
      }

      &:nth-child(3) {
        transform: ${({ menuOpen }) =>
          menuOpen ? "rotate(-45deg)" : "rotate(0)"};
      }
    }
  }
`;
