import { Resolver, Mutation } from 'type-graphql';


@Resolver()
export default class AccountMutation{
    constructor(){}

    @Mutation(()=>String)// TODO change with correct implementation
    async createUser(){}

    @Mutation(()=>String) // TODO change with correct implementation
    async updateUser(){}

    @Mutation(()=>String) // TODO change with correct implementation
    async updateMyPassword(){}

    @Mutation(()=>String) // TODO change with correct implementation
    async deleteAccount(){}

    @Mutation(()=>String) // TODO change with correct implementation
    async logIn(){}

    @Mutation(()=>String) // TODO change with correct implementation
    async logOut(){}
}