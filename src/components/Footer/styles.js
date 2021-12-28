import styled from "styled-components";

export const FooterSectionStyled = styled.footer`
  max-width: 600px;
  height: 400px;
  padding: 50px ${({ theme }) => theme.padding};
  margin: 25px auto;
  text-align: center;
  & h2 {
    margin: 10px 0 40px;
    font-size: ${({ theme }) => theme.fontsizes.headings};
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.cameopink};
  }
  & p {
    font-size: ${({ theme }) => theme.fontsizes.large};
    font-family: ${({ theme }) => theme.fonts.dmsans};
    color: ${({ theme }) => theme.colors.lavenderblue};
  }
  & div {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    & > p {
      padding-left: 5px;
    }
    & a {
      margin: 15px;
    }
    & svg {
      color: ${({ theme }) => theme.colors.lavenderblue};
    }
  }

  @media ${({ theme }) => theme.mediaQueries.mobileL} {
    padding: 0 10px;
  }
`;
