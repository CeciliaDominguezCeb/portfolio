import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  backdrop-filter: 10px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  & figure {
    width: 40px;

    & img {
      width: 100%;
    }
  }
  & h2 {
    color: ${({ theme }) => theme.colors.cameopink};
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 36px;
  }
`;
