require('./config/security/index');

const express = require('express');
const app = express();
const port = (process.env.PORT || 3000);

const bodyParser = require('body-parser');

require('./config/mongoose/index');

const userRouter = require('./routes/user.routes');
const login = require('./routes/login.routes');

app.disable('x-powered-by');

app.listen(port, ()=>{
    console.log(`App listening on port:${port}`);
});

app.use(require("cors")());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
    
 //General routers
app.use('/users', userRouter);
app.use('/', login);
