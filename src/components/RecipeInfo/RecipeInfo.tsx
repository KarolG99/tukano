import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { useApi } from "../../hooks/useApi";
import { RecipesContext } from "../../Providers/RecipesProvider";
import { RecipesWrapper } from "../SearchRecipe/SearchRecipe.styles";
import SingleRecipe from "../SingleRecipe/SingleRecipe";
import { StyledStatusInfo } from "../StatusInfo.styles";

const RecipeInfo = () => {
  const { id } = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const { handleToggleFavRecipes } = useContext(RecipesContext);
  const { recipeInfo, isLoading, errorMessage } = useApi(
    `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}`
  );

  return (
    <RecipesWrapper>
      {isLoading && <StyledStatusInfo>Ładowanie ...</StyledStatusInfo>}
      {errorMessage && <StyledStatusInfo>{errorMessage}</StyledStatusInfo>}
      {recipeInfo && (
        <SingleRecipe
          key={recipeInfo.id}
          id={recipeInfo.id}
          title={recipeInfo.title}
          image={recipeInfo.image}
          nutrition={recipeInfo.nutrition}
          handleToggleFavRecipes={() => handleToggleFavRecipes(recipeInfo)}
          isRecipeInfo={true}
          readyInMinutes={recipeInfo.readyInMinutes}
          dishTypes={recipeInfo.dishTypes}
          vegetarian={recipeInfo.vegetarian}
          vegan={recipeInfo.vegan}
          glutenFree={recipeInfo.glutenFree}
          dairyFree={recipeInfo.glutenFree}
          healthScore={recipeInfo.healthScore}
          extendedIngredients={recipeInfo.extendedIngredients}
          summary={recipeInfo.summary}
        />
      )}
    </RecipesWrapper>
  );
};

export default RecipeInfo;
