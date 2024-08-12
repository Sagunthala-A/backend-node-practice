const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    return res.status(200).send("Hi, welcome to default page!");
})

app.get('/home',(req,res)=>{
    return res.status(200).json("Hi this is my home page")
})


//query

//single query
// /api?key=val
// /api?name=val
app.get("/api", (req, res) => {
  console.log("hi..",req.query);
  const key = req.query.name;
  return res.send(`API Value of key : ${key}`);
});

// multiple queries 
// /api1?key1=val1&key2=val2
app.get("/api1", (req, res) => {
  console.log(req.query);
  const { key1, key2 } = req.query;
  return res.send(`API1 Value of key1: ${key1} & key2: ${key2}`);
});

// multiple values for single query
// /api2?key=val1,val2
app.get("/api2", (req, res) => {
  console.log(req.query.key.split(","));
  const Values = req.query.key.split(",");

  const key1 = Values[0];
  const key2 = Values[1];
  const key3 = Values[2];

  return res.send(
    `API1 Value of key1: ${key1} & key2: ${key2} & key3: ${key3}`
  );
}
)

app.listen(8000,()=>{
    console.log('server listening on port 8001');
})
