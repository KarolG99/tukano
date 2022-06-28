import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./assets/styles/theme";
import { GlobalStyle } from "./assets/styles/GlobalStyle";
import { Route, Routes } from "react-router-dom";
import SearchRecipe from "./components/SearchRecipe/SearchRecipe";
import { RecipesProvider } from "./Providers/RecipesProvider";
import FavRecipes from "./components/FavRecipes/FavRecipes";
import Navigation from "./components/Navigation/Navigation";
import { StyledMain } from "./App.styles";
import RecipeInfo from "./components/RecipeInfo/RecipeInfo";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecipesProvider>
        <GlobalStyle />
        <StyledMain>
          <Routes>
            <Route path="/" element={<SearchRecipe />} />
            <Route path="/ulubione" element={<FavRecipes />} />
            <Route path="/:id" element={<RecipeInfo />} />
          </Routes>
        </StyledMain>
        <Navigation />
      </RecipesProvider>
    </ThemeProvider>
  );
}

export default App;
