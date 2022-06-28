import styled from "styled-components";

import { StyledCommentForm } from "../SingleRecipe/SingleRecipe.styles";

export const RecipesWrapper = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-top: 30px;

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 900;
    letter-spacing: 1px;
  }
`;

export const Recipes = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  width: 100%;


  h4.status-info {
    margin-top: 60px;
  }
`;

export const StyledSearchForm = styled(StyledCommentForm)`
  label {
    margin-top: 10px;
  }
`;
