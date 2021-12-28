import styled from "styled-components";

export const SectionProjectsStyled = styled.section`
  padding: 0 ${({ theme }) => theme.padding};
  min-height: 100vh;
  & h2 {
    margin: 10px 0 40px;
    font-size: ${({ theme }) => theme.fontsizes.headings};
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.cameopink};
    &::after {
      content: "";
      display: block;
      position: relative;
      top: -25px;
      left: 170px;
      width: 300px;
      height: 0.2px;
      margin-left: 20px;
      background-color: rgba(184, 193, 236, 0.5);
    }
  }
  @media ${({ theme }) => theme.mediaQueries.mobileL} {
    padding: 10px;
    margin: 0 auto;
    h2 {
      text-align: center;
      &::after {
        display: none;
      }
    }
  }
`;
