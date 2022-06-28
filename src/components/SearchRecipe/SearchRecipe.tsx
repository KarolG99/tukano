import React, { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { RecipesContext } from "../../Providers/RecipesProvider";
import { ISearchInputs, ISingleRecipe } from "../../types";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SingleRecipe from "../SingleRecipe/SingleRecipe";
import { StyledStatusInfo } from "../StatusInfo.styles";
import {
  Recipes,
  RecipesWrapper,
  StyledSearchForm,
} from "./SearchRecipe.styles";

const SearchRecipe = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const { handleToggleFavRecipes } = useContext(RecipesContext);
  const [data, setData] = useState<ISingleRecipe[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISearchInputs>({
    defaultValues: { maxCalories: 800, minCalories: 50 },
  });

  const onSubmit: SubmitHandler<ISearchInputs> = ({
    query,
    intolerances,
    diet,
    maxCalories,
    minCalories,
  }) => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&addRecipeNutrition=true${
      intolerances && `&intolerances=${intolerances}`
    }${diet && `&diet=${diet}`}${maxCalories && `&maxCalories=${maxCalories}`}${
      minCalories && `&minCalories=${minCalories}`
    }`;

    const fetchData = async () => {
      setIsSubmitted(false);
      setIsLoading(true);
      try {
        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        setData(json.results);
        if (response.status === 402) {
          setErrorMessage("Przekroczono limit zapytań do API");
        }
      } catch (error) {
        setErrorMessage("Coś poszło nie tak, spróbuj odświeżyć stronę");
      }
      setIsLoading(false);
      setIsSubmitted(true);
    };
    if (url) {
      fetchData();
    }
  };

  return (
    <RecipesWrapper>
      <h2>Wyszukaj przepis</h2>
      <StyledSearchForm onSubmit={handleSubmit(onSubmit)}>
        {/* query */}
        <label htmlFor="query">Przepis na:*</label>
        <input
          id="query"
          {...register("query", { required: true, minLength: 2 })}
          placeholder="Np. pasta"
        />
        {errors.query?.type === "required" && (
          <ErrorMessage message="To pole jest wymagane" />
        )}
        {errors.query?.type === "minLength" && (
          <ErrorMessage message="Wpisz conajmnijesz dwa znaki" />
        )}

        {/* intolerances */}
        <label htmlFor="intolerances">Nietolerancja na:</label>
        <input
          id="intolerances"
          {...register("intolerances", { minLength: 2 })}
          placeholder="Np. gluten"
        />
        {errors.intolerances?.type === "minLength" && (
          <ErrorMessage message="Wpisz conajmnijesz dwa znaki" />
        )}

        {/* diet */}
        <label htmlFor="diet">Dieta:</label>
        <input
          id="diet"
          {...register("diet", { minLength: 2 })}
          placeholder="Np. vegetarian"
        />
        {errors.diet?.type === "minLength" && (
          <ErrorMessage message="Wpisz conajmnijesz dwa znaki" />
        )}

        {/* maxCalories */}
        <label htmlFor="maxCalories">Kalorie (max):</label>
        <input
          id="maxCalories"
          {...register("maxCalories", {
            min: 50,
            max: 800,
            valueAsNumber: true,
          })}
          placeholder="50-800"
        />
        {errors.maxCalories?.type === "min" && (
          <ErrorMessage message="Minimalna wartość to 50" />
        )}
        {errors.maxCalories?.type === "max" && (
          <ErrorMessage message="Maksymalna wartość to 800" />
        )}

        {/* minCalories */}
        <label htmlFor="minCalories">Kalorie (min)</label>
        <input
          id="minCalories"
          {...register("minCalories", {
            min: 50,
            max: 800,
            valueAsNumber: true,
          })}
          placeholder="50-800"
        />
        {errors.minCalories?.type === "min" && (
          <ErrorMessage message="Minimalna wartość to 50" />
        )}
        {errors.minCalories?.type === "max" && (
          <ErrorMessage message="Maksymalna wartość to 800" />
        )}

        <button type="submit">Szukaj</button>
      </StyledSearchForm>

      <Recipes>
        {isLoading && !errorMessage && (
          <StyledStatusInfo>Ładowanie ... </StyledStatusInfo>
        )}

        {errorMessage && <StyledStatusInfo>{errorMessage}</StyledStatusInfo>}

        {!data?.length && isSubmitted && (
          <StyledStatusInfo>Nic nie znalazłem :(</StyledStatusInfo>
        )}

        {data &&
          data.map((recipe) => (
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

export default SearchRecipe;
