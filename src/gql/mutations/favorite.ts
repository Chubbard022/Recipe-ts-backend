import { Resolver, Mutation } from 'type-graphql';

@Resolver()
export default class FavoriteRecipes{
    constructor(){}

    @Mutation(()=>String)// TODO change with correct implementation
    async toggleFavoriteRecipe(){}
}