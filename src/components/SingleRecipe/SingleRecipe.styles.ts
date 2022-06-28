import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as FavOutline } from "../../assets/icons/favouriteOutline.svg";
import { ReactComponent as FavFill } from "../../assets/icons/favouriteFill.svg";
import { ReactComponent as Comment } from "../../assets/icons/comment.svg";

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
  margin-right: 20px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FavButton = styled.button`
  position: absolute;
  right: 12px;
  top: 17px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const CommentButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const StyledCommentForm = styled.form`
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  & label {
    margin: 3px 0;
  }

  & input {
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.dark};
    padding: 4px 8px;
    font-size: 1rem;

    &::placeholder {
      font-size: 0.9rem;
    }
  }

  & button {
    width: fit-content;
    margin: 4px 0;
    padding: 3px 8px;
    border-radius: 10px;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.9rem;
    font-weight: 600;
    align-self: flex-end;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const FavOutlineIcon = styled(FavOutline)`
  fill: ${({ theme }) => theme.colors.red};
`;

export const FavFillIcon = styled(FavFill)`
  fill: ${({ theme }) => theme.colors.red};
`;

export const CommentIcon = styled(Comment)`
  fill: ${({ theme }) => theme.colors.primary};
`;
