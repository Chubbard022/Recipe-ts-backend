import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import { graphQlBuildSchema } from './gql/initalize_gql';

const main = async() =>{
    const schema = await graphQlBuildSchema;
    const server = new ApolloServer({schema});
    const app = express();
    
    server.applyMiddleware({ app });

    app.set('port',3000).set('env','staging').use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
}