import { buildSchema } from "type-graphql";

import AccountQuery from "./queries/account";
import IngredientQuery from "./queries/ingredient";
import RecipeQuery from "./queries/recipe";

import AccountMutation from "./mutations/account";
import IngredientMutation from "./mutations/ingredient";
import RecipeMutation from "./mutations/recipe";

export const graphQlBuildSchema = buildSchema({
  resolvers: [
    AccountQuery,
    IngredientQuery,
    RecipeQuery,
    AccountMutation,
    IngredientMutation,
    RecipeMutation,
  ],
  emitSchemaFile: true,
  validate: false,
});
