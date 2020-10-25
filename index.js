const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

const database = require('./config/mongoose/index');

const userRouter = require('./routes/user.routes');


app.listen(port, ()=>{
    console.log(`App listening on port:${port}`);
});

app.use(require("cors")());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
    
 //General routers
app.use('/users', userRouter);

app.get("/", (req, res)=>{
    res.status(404).send('');
});