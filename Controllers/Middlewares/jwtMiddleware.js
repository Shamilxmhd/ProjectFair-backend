const jwt = require('jsonwebtoken')

const jwtMiddleware = (req, res, next) => {
    console.log("Inside JWT Middleware");
 
    try {
        const token = req.headers['authorization'].split(" ")[1]
        console.log(token);
        if(token){
            console.log(jwt.verify(token, process.env.jwt_secret));
            next()
        }else{
            res.status(401).json("Please Provide Token!!!")

        }
        
    } catch {
        res.status(403).json("Please Login!!!")
    }
}

module.exports = jwtMiddleware  