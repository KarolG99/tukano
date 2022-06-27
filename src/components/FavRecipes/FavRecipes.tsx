import React, { useContext } from "react";
import { FavRecipesContext } from "../../Providers/FavRecipesProvider";
import { ISingleRecipe } from "../../types";
import { Recipes, RecipesWrapper } from "../SearchRecipe/SearchRecipe.styles";
import SingleRecipe from "../SingleRecipe/SingleRecipe";

const FavRecipes = () => {
  const { handleToggleFavRecipes } = useContext(FavRecipesContext);
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
            onClick={() => handleToggleFavRecipes(recipe)}
          />
        ))}
      </Recipes>
    </RecipesWrapper>
  );
};

export default FavRecipes;
