import React, { useContext } from "react";

import { RecipesContext } from "../../Providers/RecipesProvider";
import { ISingleRecipe } from "../../types";
import { Recipes, RecipesWrapper } from "../SearchRecipe/SearchRecipe.styles";
import SingleRecipe from "../SingleRecipe/SingleRecipe";

const FavRecipes = () => {
  const { handleToggleFavRecipes } = useContext(RecipesContext);
  const storedRecipes = JSON.parse(localStorage.getItem("favRecipes") || "[]");

  return (
    <RecipesWrapper>
      <Recipes>
        {storedRecipes.map((recipe: ISingleRecipe) => (
          <SingleRecipe
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            image={recipe.image}
            nutrition={recipe.nutrition}
            handleToggleFavRecipes={() => handleToggleFavRecipes(recipe)}
          />
        ))}
      </Recipes>
    </RecipesWrapper>
  );
};

export default FavRecipes;
