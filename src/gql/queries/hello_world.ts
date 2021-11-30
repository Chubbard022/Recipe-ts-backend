import { Resolver, Arg, Query } from 'type-graphql';


@Resolver()
export class HelloWorldQuery{
    constructor(){}

    @Query(()=>String)
    async  helloWorld(){
        return 'hello world'
    }
}