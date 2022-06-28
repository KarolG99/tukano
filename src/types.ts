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
  handleToggleFavRecipes?: React.MouseEventHandler<HTMLButtonElement>;
  handleAddComment?: React.MouseEventHandler<HTMLButtonElement>;
};

export type ICommentInput = {
  content: string;
};

// FavRecipesProvider.ts
export type IRecipesContext = {
  handleToggleFavRecipes: (recipe: ISingleRecipe) => void;
  handleAddComment: (content: string, id: number) => void;
};

export type IRecipesProvider = {
  children: JSX.Element[];
};

// ErrorMessage.tsx
export type IErrorMessage = {
  message: string;
};

// Comments.tsx
export type IComments = {
  comment: string;
};


