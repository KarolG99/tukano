import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./assets/styles/theme";
import { GlobalStyle } from "./assets/styles/GlobalStyle";
import { Route, Routes } from "react-router-dom";
import SearchRecipe from "./components/SearchRecipe/SearchRecipe";
import { FavRecipesProvider } from "./Providers/FavRecipesProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FavRecipesProvider>
        <GlobalStyle />
        <main>
          <Routes>
            <Route path="/" element={<SearchRecipe />} />
          </Routes>
        </main>
      </FavRecipesProvider>
    </ThemeProvider>
  );
}

export default App;
