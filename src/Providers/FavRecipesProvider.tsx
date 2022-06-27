import { createContext, useState } from "react";
import {
  IFavRecipesContext,
  IFavRecipesProvider,
  ISingleRecipe,
} from "../types";

export const FavRecipesContext = createContext<IFavRecipesContext>({
  favRecipes: [],
  handleToggleFavRecipes: () => {},
});

export const FavRecipesProvider = ({ children }: IFavRecipesProvider) => {
  const [favRecipes, setFavRecipes] = useState<ISingleRecipe[]>([]);

  const handleToggleFavRecipes = (recipe: ISingleRecipe) => {
    if (!favRecipes.find((el) => el.id === recipe.id)) {
      setFavRecipes([recipe, ...favRecipes]);
    } else {
      const currentFavRecipes = favRecipes.filter((el) => el.id !== recipe.id);
      setFavRecipes([...currentFavRecipes]);
    }
  };

  return (
    <FavRecipesContext.Provider
      value={{
        favRecipes,
        handleToggleFavRecipes,
      }}
    >
      {children}
    </FavRecipesContext.Provider>
  );
};
