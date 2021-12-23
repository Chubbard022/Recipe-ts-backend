import { buildSchema } from "type-graphql";

import AccountQuery from "./queries/account";
import IngredientQuery from "./queries/ingredient";
import RecipeQuery from "./queries/recipe";
import CategoryQuery from "./queries/category";
import FavoriteQuery from "./queries/favorite";

import AccountMutation from "./mutations/account";
import IngredientMutation from "./mutations/ingredient";
import RecipeMutation from "./mutations/recipe";
import CategoryMutation from "./mutations/category";
import FavoriteMutation from "./mutations/favorite";

export const graphQlBuildSchema = buildSchema({
  resolvers: [
    AccountQuery,
    IngredientQuery,
    RecipeQuery,
    CategoryQuery,
    FavoriteQuery,
    AccountMutation,
    IngredientMutation,
    RecipeMutation,
    CategoryMutation,
    FavoriteMutation,
  ],
  emitSchemaFile: true,
  validate: false,
});
