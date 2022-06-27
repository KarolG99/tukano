import React, { useContext } from "react";

import { useApi } from "../../hooks/useApi";
import { FavRecipesContext } from "../../Providers/FavRecipesProvider";
import { ISingleRecipe } from "../../types";
import SingleRecipe from "../SingleRecipe/SingleRecipe";
import { Recipes, SearchRecipeWrapper } from "./SearchRecipe.styles";

const data2: ISingleRecipe[] = [
  {
    id: 123,
    title: "PAsta with cos",
    image: "https://spoonacular.com/recipeImages/654959-312x231.jpg",
    nutrition: {
      nutrients: [
        {
          name: "Fat",
          amount: 10.2344,
          unit: "g",
        },
        {
          name: "Fat",
          amount: 10.2344,
          unit: "g",
        },
      ],
    },
  },
  {
    id: 456,
    title: "Cos with cos",
    image: "https://spoonacular.com/recipeImages/654959-312x231.jpg",
    nutrition: {
      nutrients: [
        {
          name: "CHude",
          amount: 20.2344,
          unit: "kg",
        },
      ],
    },
  },
];

const SearchRecipe = () => {
  // const API_URL = process.env.REACT_APP_API_KEY;
  // const url = `https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=50&number=5&apiKey=${API_URL}`;
  // const { data, isLoading, errorMessage } = useApi(url);
  const { handleToggleFavRecipes } = useContext(FavRecipesContext);

  return (
    <SearchRecipeWrapper>
      <Recipes>
        {data2 &&
          data2.map((recipe) => (
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
    </SearchRecipeWrapper>
  );
};

export default SearchRecipe;
