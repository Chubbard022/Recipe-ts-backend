import { Resolver, Query } from 'type-graphql';


@Resolver()
export default class AccountQuery{
    constructor(){}

    @Query(()=>String) // TODO change with correct implementation
    async GetMe(){}

    @Query(()=>String) // TODO change with correct implementation
    async GetAllUser(){}

    @Query(()=>String) // TODO change with correct implementation
    async SuggestedUsers(){}

    @Query(()=>String) // TODO change with correct implementation
    async GetUserById(){}

    @Query(()=>String) // TODO change with correct implementation
    async GetUserByName(){}
}