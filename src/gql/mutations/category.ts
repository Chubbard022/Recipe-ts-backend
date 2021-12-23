import { Resolver, Mutation } from 'type-graphql';

@Resolver()
export default class CategoryMutation{
    constructor(){}

    @Mutation(()=>String)// TODO change with correct implementation
    async createCategory(){}

    @Mutation(()=>String)// TODO change with correct implementation
    async updateCategory(){}

    @Mutation(()=>String)// TODO change with correct implementation
    async deleteCategory(){}

    @Mutation(()=>String)// TODO change with correct implementation
    async addRecipeToCategory(){}

    @Mutation(()=>String)// TODO change with correct implementation
    async deleteRecipeFromCategory(){}
}