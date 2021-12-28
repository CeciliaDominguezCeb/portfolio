import React, { useState } from "react";
import { BurgerButton } from "../BurgerButton";
import { NavMenu } from "../NavMenu";
import logo from "../../assets/logo.svg";

import { HeaderStyled } from "./styles";

export const Header = () => {
  const isMenuOpen = false;
  const [menuOpen, setMenuOpen] = useState(isMenuOpen);
  return (
    <HeaderStyled>
      <figure>
        <img src={logo} alt="logo from web" />
      </figure>
      <div>
        <BurgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <NavMenu menuOpen={menuOpen} />
      </div>
    </HeaderStyled>
  );
};
