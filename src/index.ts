import "reflect-metadata";
import { ApolloServer } from 'apollo-server-express';
import express from "express";
import * as bodyParser from "body-parser";
import { graphQlBuildSchema } from "./gql/initalize_gql";

const main = async () => {
  const app: express.Application = express();
  const schema = await graphQlBuildSchema;
  const server =await  new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res }),
  });

  server.applyMiddleware({ app,path: '/graphql', });

  app
    .set("port", 8888)
    .set("env", "development")
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }));
  app.listen(app.get("port"), () => console.log("working"));
};

main();
