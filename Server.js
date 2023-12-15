const express = require('express');

const app = express();

const {MongoClient} = require("mongodb");

const URL = "mongodb://127.0.0.1:27017"

const client = new MongoClient(URL);

app.listen(5100,function(req,res)
{
  console.log("Marvellous Server is Started Successfully...");

});

//Handling CORS
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","http://localhost:4200");

  res.header("Access-Control-Allow-Headers","Origin , X-Requested-with , Content-Type , Accept");

  next();
});

async function getConnection()
{
  let result = await client.connect();
  let db = result.db("Marvellous");
  return db.collection("Batches");
  
}

app.get('/',async function readData(req,res)
{
  let data = await getConnection();
  data = await data.find().toArray();
  res.send(data);
});

app.put('/',async function insertData(req,res)
{
  let data = await getConnection();
  let result = await data.insertMany().SetData();
  if(result.acknowledged)
  {
    res.send("Insert Operation is Performed Successfully");
  }
});

// function main()
// {
//   readData();
// }

// main();
