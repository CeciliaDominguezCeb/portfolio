import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
   box-sizing: border-box;
  margin: 0;
  padding: 0;
  
}
html{
  font-size: 62.5%;
}

body{
  background-color: ${({ theme }) => theme.colors.oxfordblue};
  color: ${({ theme }) => theme.colors.white};
  max-height: 100vh;
  width: 100%;

  min-height: 100%;

  &::-webkit-scrollbar {
  width: 6px;
  height:5px;
  }
  &::-webkit-scrollbar-thumb {
  background: rgba(184, 193, 236,0.5);
  border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 4px;
  }
}
`;
