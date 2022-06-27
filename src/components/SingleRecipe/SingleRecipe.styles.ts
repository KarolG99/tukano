import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as FavOutline } from "../../assets/icons/favouriteOutline.svg";
import { ReactComponent as FavFill } from "../../assets/icons/favouriteFill.svg";

export const SingleRecipeWrapper = styled.section`
  width: 90%;
  max-width: fit-content;
  height: fit-content;
  padding: 15px 10px;
  margin: 12px;
  border-radius: 10px;
  position: relative;
  -webkit-box-shadow: 1px 3px 19px -8px rgba(66, 68, 90, 1);
  -moz-box-shadow: 1px 3px 19px -8px rgba(66, 68, 90, 1);
  box-shadow: 1px 3px 19px -8px rgba(66, 68, 90, 1);

  img {
    width: 90%;
    max-width: 200px;
    margin-right: 30px;
    margin-top: 30px;
  }

  h3 {
    margin: 3px 0;
  }

  p {
    line-height: 130%;

    &.nutrients {
      font-weight: 500;
      margin-bottom: 2px;
    }
  }
`;

export const StyledNutritionList = styled.ul`
  margin-bottom: 10px;
  list-style: none;

  li {
    color: ${({ theme }) => theme.colors.dark};
    line-height: 130%;
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const FavOutlineIcon = styled(FavOutline)`
  fill: ${({ theme }) => theme.colors.red};
  position: absolute;
  right: 12px;
  top: 17px;
  cursor: pointer;
`;

export const FavFillIcon = styled(FavFill)`
  fill: ${({ theme }) => theme.colors.red};
  position: absolute;
  right: 12px;
  top: 17px;
  cursor: pointer;
`;
