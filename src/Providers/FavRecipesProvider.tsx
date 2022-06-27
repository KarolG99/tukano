import { createContext, useState } from "react";
import {
  IFavRecipesContext,
  IFavRecipesProvider,
  ISingleRecipe,
} from "../types";

export const FavRecipesContext = createContext<IFavRecipesContext>({
  handleToggleFavRecipes: () => {},
});

export const FavRecipesProvider = ({ children }: IFavRecipesProvider) => {
  const [favRecipes, setFavRecipes] = useState<ISingleRecipe[]>([]);

  const handleToggleFavRecipes = (recipe: ISingleRecipe) => {
    const storedRecipes = JSON.parse(
      localStorage.getItem("favRecipes") || "[]"
    );

    if (!storedRecipes.find((el: { id: number }) => el.id === recipe.id)) {
      localStorage.setItem(
        "favRecipes",
        JSON.stringify([
          recipe,
          ...JSON.parse(localStorage.getItem("favRecipes") || "[]"),
        ])
      );
      setFavRecipes(storedRecipes);
    } else {
      const currentFavRecipes = storedRecipes.filter(
        (el: { id: number }) => el.id !== recipe.id
      );
      localStorage.setItem(
        "favRecipes",
        JSON.stringify([...currentFavRecipes])
      );
      setFavRecipes(storedRecipes);
    }
  };

  return (
    <FavRecipesContext.Provider
      value={{
        handleToggleFavRecipes,
      }}
    >
      {children}
    </FavRecipesContext.Provider>
  );
};
