import { Resolver, Query } from 'type-graphql';

@Resolver()
export default class FoodQueries{
    constructor(){}
    
    @Query(()=>String) // TODO change with correct implementation
    async getAllIngredients(){}

    @Query(()=>String) // TODO change with correct implementation
    async getIngredientById(){}

    @Query(()=>String) // TODO change with correct implementation
    async getIngredientByName(){}

}