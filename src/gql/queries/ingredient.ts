import { Resolver, Mutation } from 'type-graphql';


@Resolver()
export default class IngredientMutation{
    constructor(){}

    @Mutation(()=>String)// TODO change with correct implementation
    async createIngredient(){}

    @Mutation(()=>String)// TODO change with correct implementation
    async updateIngredient(){}

    @Mutation(()=>String)// TODO change with correct implementation
    async deleteIngredient(){}
}