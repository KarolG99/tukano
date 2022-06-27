import React from "react";

// SingleRecipe.tsx & useApi.ts
export type ISingleRecipe = {
  id: number;
  title: string;
  image: string;
  nutrition: {
    nutrients: {
      name: string;
      amount: number;
      unit: string;
    }[];
  };
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

// FavRecipesProvider.ts
export type IFavRecipesContext = {
  favRecipes: ISingleRecipe[];
  handleToggleFavRecipes: (recipe: ISingleRecipe) => void;
};

export type IFavRecipesProvider = {
  children: JSX.Element[];
};
