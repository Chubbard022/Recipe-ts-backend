import { Resolver, Query } from 'type-graphql';


@Resolver()
export default class RecipesQueries{
    constructor(){}

    @Query(()=>String) // TODO change with correct implementation
    async getAllRecipes(){}

    @Query(()=>String) // TODO change with correct implementation
    async getRecipeById(){}

    @Query(()=>String) // TODO change with correct implementation
    async getRecipeByName(){}
}