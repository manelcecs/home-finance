const express = require('express');
const app = express();
const port = 3000;

const database = require('./config/mongoose/index');

app.get("/", (req, res)=>{
    res.send("Hello world!");
});

app.listen(port, ()=>{
    console.log(`App listening on port:${port}`);
    console.log(`Database ${database.name} ready`);
});