import styled from "styled-components";

export const CardProjectStyled = styled.div`
  margin: 150px auto;
  min-height: 100%;
  min-width: 350px;

  & > div {
    display: flex;
    gap: 35px;
    flex-direction: row;

    @media ${({ theme }) => theme.mediaQueries.tablet} {
      flex-direction: column;
    }

    & > div {
      width: 50%;
      @media ${({ theme }) => theme.mediaQueries.tablet} {
        width: 100%;
      }

      & h3 {
        text-align: center;
        font-size: 24px;
        font-family: ${({ theme }) => theme.fonts.poppins};

        margin-bottom: 20px;
        color: #ccd6f6;
      }
      & p {
        padding: 25px;
        color: ${({ theme }) => theme.colors.lavenderblue};
        background-color: ${({ theme }) => theme.colors.darkblue};
        font-size: ${({ theme }) => theme.fontsizes.large};
        font-family: ${({ theme }) => theme.fonts.dmsans};
        box-shadow: 11px 12px 10px -10px rgba(12, 15, 28, 0.89);
      }
      & div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 10px;
        & a {
          width: 48px;
          text-align: center;
          padding: 5px;
          color: ${({ theme }) => theme.colors.lavenderblue};
          &:hover {
            color: ${({ theme }) => theme.colors.cameopink};
          }
        }
      }
    }

    & figure {
      width: 50%;
      height: 100%;

      @media ${({ theme }) => theme.mediaQueries.tablet} {
        width: 100%;
      }
      & img {
        width: 100%;
        height: 300px;
        object-fit: scale-down;

        @media ${({ theme }) => theme.mediaQueries.tablet} {
          width: 100%;
        }
      }
    }
  }
`;
