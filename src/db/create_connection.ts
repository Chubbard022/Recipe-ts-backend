const { MongoClient } = require('mongodb');
export const createMongoDBConnection = () =>{
const uri = "";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect((err:any) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
}