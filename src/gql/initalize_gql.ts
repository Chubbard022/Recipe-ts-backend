import {buildSchema} from "type-graphql";
import {HelloWorldQuery} from "./queries/hello_world"

export const graphQlBuildSchema = buildSchema({
    resolvers:[HelloWorldQuery],
    emitSchemaFile: true,
    validate: true
})