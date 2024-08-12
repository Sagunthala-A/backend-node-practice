const express = require('express');
const app = express();

// 
function fun(res,req,next){
    console.log("Hi i'm from middleware ... fun function run for all api");
    next();
}

//example for middleware
app.use('/',fun)

// Middleware function
app.use((req, res, next) => {
    console.log("Hi i'm from middleware ... fun function run for all api");
    next(); // Pass control to the next middleware
});

app.get("/", (req, res) => {
  return res.send("server is running / default page");
});

app.get('/home',(req, res) =>{
    console.log("Hi i'm home function")
    return res.send("welcome to the home page")
})

app.listen(8000,((req, res) => {
    console.log('listening on port 8000');
}))

