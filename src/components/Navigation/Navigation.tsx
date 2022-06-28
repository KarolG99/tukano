import React, { useRef } from "react";

import { StyledLink, StyledNavigation } from "./Navigation.styles";

const Navigation = () => {
  const NavLinkRef = useRef<HTMLAnchorElement>(null);

  return (
    <StyledNavigation>
      <StyledLink to="/" ref={NavLinkRef}>
        Szukaj
      </StyledLink>
      <StyledLink to="/ulubione" ref={NavLinkRef}>
        Ulubione
      </StyledLink>
    </StyledNavigation>
  );
};

export default Navigation;
