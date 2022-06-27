import React from "react";
import { ISingleRecipe } from "../../types";
import { FavOutlineIcon, SingleRecipeWrapper, StyledLink, StyledNutritionList } from "./SingleRecipe.styles";

const SingleRecipe = ({ id, title, image, nutrition }: ISingleRecipe) => {
  return (
    <SingleRecipeWrapper>
      <FavOutlineIcon />
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
