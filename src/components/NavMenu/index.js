import React from "react";
import { NavStyled } from "./styles";

export const NavMenu = ({ menuOpen }) => {
  return (
    <NavStyled menuOpen={menuOpen}>
      <a href="#about">Sobre mí</a>
      <a href="#projects">Proyectos</a>
      <a href="#contact">Contacto</a>
    </NavStyled>
  );
};
