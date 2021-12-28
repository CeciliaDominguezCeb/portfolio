import React from "react";
import { StyledBurger } from "./styles";

export const BurgerButton = ({ menuOpen, setMenuOpen }) => {
  return (
    <StyledBurger
      title="menu button"
      menuOpen={menuOpen}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
