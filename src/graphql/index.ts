import {buildSchema} from "type-graphql";
import {RecipeQueries,RecipeMutations} from "./resolvers";

const createSchema = buildSchema({
    resolvers:[RecipeQueries,RecipeQueries],
    emitSchemaFile: true
})