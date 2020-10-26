const jwt = require('jsonwebtoken');

const authorizeJWT = (req, res, next) => {

    console.log("Auth middleware");
    const authHeader = req.headers.authorization;

    if(authHeader){

        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.JWTkey, (err, user) => {
            if(err){
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });

    }else{
        res.sendStatus(401);
    }

}

module.exports = authorizeJWT;