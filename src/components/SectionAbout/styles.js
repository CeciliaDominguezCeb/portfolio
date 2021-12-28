import styled from "styled-components";

export const SectionAboutStyled = styled.section`
  padding: 0 ${({ theme }) => theme.padding};
  min-height: 100vh;
  margin-bottom: 100px;

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
      left: 150px;
      width: 300px;
      height: 0.2px;
      margin-left: 20px;
      background-color: rgba(184, 193, 236, 0.5);
    }
  }
  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 0 100px;
    min-height: 80vh;
  }
  @media ${({ theme }) => theme.mediaQueries.mobileL} {
    padding: 0 10px;

    h2 {
      text-align: center;
      &::after {
        display: none;
      }
    }
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  max-width: 1000px;
  overflow: hidden;

  & p {
    font-size: ${({ theme }) => theme.fontsizes.large};
    font-family: ${({ theme }) => theme.fonts.dmsans};
    color: ${({ theme }) => theme.colors.lavenderblue};
    line-height: 1.3;
    padding-right: 50px;
    span {
      font-weight: bold;
    }
  }
  & figure {
    width: 300px;
    height: 302px;
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    flex-direction: column;

    align-items: center;
    min-width: 400px;

    & p {
      padding: 10px 0;
      margin-bottom: 30px;
      width: 100%;
    }
  }
`;
