import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 0;
  position: sticky;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.white};
`;

const activeclassname = "active";
export const StyledLink = styled(NavLink).attrs({ activeclassname })`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};

  &.${activeclassname} {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
