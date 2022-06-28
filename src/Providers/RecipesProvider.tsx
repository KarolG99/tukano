import { createContext, useState } from "react";
import { IRecipesContext, IRecipesProvider, ISingleRecipe } from "../types";

export const RecipesContext = createContext<IRecipesContext>({
  handleToggleFavRecipes: () => {},
  handleAddComment: () => {},
});

export const RecipesProvider = ({ children }: IRecipesProvider) => {
  const [favRecipes, setFavRecipes] = useState<ISingleRecipe[]>([]);
  const [comments, setComments] = useState<string[]>([]);

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

  const handleAddComment = (content: string, id: number) => {
    const storedComments = JSON.parse(localStorage.getItem("comments") || "[]");
    localStorage.setItem(
      "comments",
      JSON.stringify([
        content,
        ...JSON.parse(localStorage.getItem("comments") || "[]"),
      ])
    );
    setFavRecipes(storedComments);
  };

  return (
    <RecipesContext.Provider
      value={{
        handleToggleFavRecipes,
        handleAddComment,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
