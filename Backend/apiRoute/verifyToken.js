const { any } = require('@hapi/joi');
const jwt  = require('jsonwebtoken');
const { async } = require('rxjs');
const secretKey = "azertyuio@%123456";



const verifyToken = async (req,res,next)=>{
    const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
   // const token = await req.headers.Autorization.split(" ")[1];
    console.log('token',token)
    if(!token){
        res.status(403).send("token is required for authentication")
    }else{
        try{ 
           
            decodedToken = jwt.verify(token, secretKey )
           req.decodedToken = decodedToken
            console.log(req.decodedToken)
        }catch {
            res.json({status : 'error', data: 'il ya une erreur'})
        }
    } next();
};

module.exports = verifyToken;