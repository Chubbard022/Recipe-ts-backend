import { Resolver, Mutation } from 'type-graphql';

@Resolver()
export default class RecipeMutation{
    constructor(){}

    @Mutation(()=>String) // TODO change with correct implementation
    async createRecipe(){}

    @Mutation(()=>String) // TODO change with correct implementation
    async updateRecipe(){}

    @Mutation(()=>String) // TODO change with correct implementation
    async deleteRecipe(){}
}