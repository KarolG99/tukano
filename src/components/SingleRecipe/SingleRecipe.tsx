import React, { useContext } from "react";
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
  const { favRecipes } = useContext(FavRecipesContext);

  if (favRecipes) {
  console.log(favRecipes);
  }

  return (
    <SingleRecipeWrapper>
      <button onClick={onClick}>
        {favRecipes.find((el) => el.id === id) ? (
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
