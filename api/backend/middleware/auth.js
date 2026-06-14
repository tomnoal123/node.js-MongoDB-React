const jwt = require('jsonwebtoken');

function auth(req, res, next){
    
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({
            message:"Brak tokena"
        })
    }

    try {

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        
        req.user = decoded;

        next();
    } catch (err){
        res.status(401).json({
            message:"Nieprawidłowy token"})
    }
}

module.exports = auth;