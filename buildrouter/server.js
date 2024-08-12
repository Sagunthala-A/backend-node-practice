const express = require('express');
const app = express();
const router = require('./router');

app.use('/auth',router);

app.get('/', (req, res) => {
    return res.send('Hi welcome to default page!');
})

app.listen(8000,()=>{
    console.log('listening on port 8000');
})
