import { Resolver, Query } from 'type-graphql';

@Resolver()
export default class FavoriteRecipes{
    constructor(){}

    @Query(()=>String)// TODO change with correct implementation
    async getCategory(){}

    @Query(()=>String)// TODO change with correct implementation
    async getAllCategories(){}

    @Query(()=>String)// TODO change with correct implementation
    async getAllRecipesForCategory(){}
}