import styled, { keyframes } from "styled-components";

const colorchange = keyframes`
 0% {
    background-position: left;
  }
  100% {
    background-position: right;
  }
}
`;
export const TitleContainerStyled = styled.section`
  max-width: 1600px;
  padding: 150px 150px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;

  & h1 {
    margin: 10px 0;
    font-size: ${({ theme }) => theme.fontsizes.xxlarge};
    color: #ee6352;
    line-height: 1.2;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    background-image: linear-gradient(
      to right,
      #da6c7d,
      #de7c8b,
      #e79da8,
      #eebbc3
    );
    -webkit-background-clip: text;
    color: transparent;
    background-size: 400%;
    animation: ${colorchange} 2s infinite alternate;
  }

  & h3 {
    font-family: ${({ theme }) => theme.fonts.dmsans};
    font-size: ${({ theme }) => theme.fontsizes.large};
    font-weight: 400;
  }
  & > a {
    color: ${({ theme }) => theme.colors.cameopink};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.cameopink};
    border-radius: 4px;
    padding: 1.25rem 1.75rem;
    font-size: ${({ theme }) => theme.fontsizes.large};
    font-family: ${({ theme }) => theme.fonts.dmsans};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;

    margin-top: 50px;
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    align-items: center;
    padding: 50px 100px;
    height: 80vh;
    & h1 {
      font-size: ${({ theme }) => theme.fontsizes.xlarge};
    }
  }
  @media ${({ theme }) => theme.mediaQueries.mobileL} {
    padding: 0;
    margin: 50px auto;
    & h1 {
      font-size: ${({ theme }) => theme.fontsizes.headings};
    }
    & h3 {
      font-size: ${({ theme }) => theme.fontsizes.medium};
    }
  }
`;
