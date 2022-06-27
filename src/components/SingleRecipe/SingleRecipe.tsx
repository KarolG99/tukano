import React, { useContext, useEffect } from "react";
import { FavRecipesContext } from "../../Providers/FavRecipesProvider";
import { ISingleRecipe } from "../../types";
import {
  FavFillIcon,
  FavOutlineIcon,
  SingleRecipeWrapper,
  StyledLink,
  StyledNutritionList,
} from "./SingleRecipe.styles";

const SingleRecipe = ({
  id,
  title,
  image,
  nutrition,
  onClick,
}: ISingleRecipe) => {
  const StoredRecipes = JSON.parse(localStorage.getItem("favRecipes") || "[]");


  return (
    <SingleRecipeWrapper>
      <button onClick={onClick}>
        {StoredRecipes.find((el: { id: number }) => el.id === id) ? (
          <FavFillIcon />
        ) : (
          <FavOutlineIcon />
        )}
      </button>

      <img src={image} alt="zdjęcie posiłku" />
      <h3>{title}</h3>
      <p className="nutrients">Składniki odżywcze:</p>

      <StyledNutritionList>
        {nutrition.nutrients.map((nutrient, index) => (
          <React.Fragment key={index}>
            <li>
              {nutrient.name}:{" "}
              <i>
                {nutrient.amount}
                {nutrient.unit}
              </i>
            </li>
          </React.Fragment>
        ))}
      </StyledNutritionList>

      <StyledLink to="/">Więcej {">"}</StyledLink>
    </SingleRecipeWrapper>
  );
};

export default SingleRecipe;
