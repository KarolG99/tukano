import React, { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RecipesContext } from "../../Providers/RecipesProvider";
import { ICommentInput, ISingleRecipe } from "../../types";
import Comments from "../Comments/Comments";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {
  CommentButton,
  CommentIcon,
  FavButton,
  FavFillIcon,
  FavOutlineIcon,
  FlexWrapper,
  SingleRecipeWrapper,
  StyledCommentForm,
  StyledLink,
  StyledNutritionList,
} from "./SingleRecipe.styles";

const SingleRecipe = ({
  id,
  title,
  image,
  nutrition,
  handleToggleFavRecipes,
}: ISingleRecipe) => {
  const { handleAddComment } = useContext(RecipesContext);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICommentInput>();
  const StoredRecipes = JSON.parse(localStorage.getItem("favRecipes") || "[]");
  const StoredComments = JSON.parse(localStorage.getItem("comments") || "[]");

  const onSubmit: SubmitHandler<ICommentInput> = (comment) => {
    handleAddComment(comment.content, id);
    setIsSubmitted(true);
  };

  useEffect(() => {
    reset({
      content: "",
    });
  }, [reset, isSubmitted]);

  return (
    <SingleRecipeWrapper>
      <FavButton onClick={handleToggleFavRecipes}>
        {StoredRecipes.find((el: { id: number }) => el.id === id) ? (
          <FavFillIcon />
        ) : (
          <FavOutlineIcon />
        )}
      </FavButton>

      <img src={image} alt="zdjęcie posiłku" />
      <h3>{title}</h3>
      <p className="nutrients">Składniki odżywcze:</p>

      <StyledNutritionList>
        {nutrition.nutrients.map((nutrient, index) => (
          <React.Fragment key={index}>
            <li>
              {nutrient.name}:{" "}
              <i>
                {nutrient.amount}
                {nutrient.unit}
              </i>
            </li>
          </React.Fragment>
        ))}
      </StyledNutritionList>

      <FlexWrapper>
        <StyledLink to="/">Więcej {">"}</StyledLink>

        <CommentButton onClick={() => setIsFormOpen((prev) => !prev)}>
          <CommentIcon />
        </CommentButton>
      </FlexWrapper>

      {isFormOpen && (
        <StyledCommentForm onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="comment">Skomentuj</label>
          <input
            type="text"
            id="comment"
            {...register("content", { required: true, minLength: 3 })}
            placeholder="treść komentarza"
          />
          {errors.content?.type === "required" && (
            <ErrorMessage message="Wpisz coś" />
          )}
          {errors.content?.type === "minLength" && (
            <ErrorMessage message="Wpisz conajmniej 3 znaki" />
          )}
          <button type="submit">Dodaj</button>
        </StyledCommentForm>
      )}

      {StoredComments && (
        <>
          <b>Komentarze</b>
          {StoredComments.map((comment: string, index: number) => (
            <div key={index}>
              <Comments comment={comment} />
            </div>
          ))}
        </>
      )}
    </SingleRecipeWrapper>
  );
};

export default SingleRecipe;
