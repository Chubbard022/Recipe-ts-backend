import { Resolver, Query } from 'type-graphql';

@Resolver()
export default class FavoriteRecipes{
    constructor(){}

    @Query(()=>String)// TODO change with correct implementation
    async getUserFavoritedRecipes(){}

    @Query(()=>String)// TODO change with correct implementation
    async getUserFavoriteRecipe(){}
    
    @Query(()=>String)// TODO change with correct implementation
    async getUserFavoriteCategories(){}

}