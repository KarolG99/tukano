import { ISingleRecipe } from "../types";

export const RecipeInfoData: ISingleRecipe[] = [
  {
    id: 123,
    image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
    title: "Pasta with something special",
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
    readyInMinutes: 45,
    dishTypes: ["lunch", "dinner", "main dish"],
    vegetarian: false,
    vegan: false,
    glutenFree: true,
    dairyFree: false,
    healthScore: 18,
    extendedIngredients: [
      {
        original: "salt and pepper to taste",
      },
      {
        original: "5-6 cloves garlic",
      },
    ],
    summary:
      'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be just the main course you are searching for. This recipe makes 2 servings with <b>636 calories</b>, <b>21g of protein</b>, and <b>20g of fat</b> each. For <b>$1.83 per serving</b>, this recipe <b>covers 24%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes about <b>45 minutes</b>. This recipe is liked by 209 foodies and cooks. If you have pasta, salt and pepper, cheese, and a few other ingredients on hand, you can make it. To use up the extra virgin olive oil you could follow this main course with the <a href="https://spoonacular.com/recipes/peach-crisp-healthy-crisp-for-breakfast-487698">Peach Crisp: Healthy Crisp for Breakfast</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 86%</b>. This score is tremendous. Try <a href="https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375">Cauliflower Gratin with Garlic Breadcrumbs</a>, <a href="https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href="https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a> for similar recipes.',
  },
];
