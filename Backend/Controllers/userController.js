let bcrypt = require('bcrypt');
const express = require('express');
const { default: mongoose, isValidObjectId, isObjectIdOrHexString } = require('mongoose');
const Users = require("../BackEnd/models/userModel");
const Roles = require("../BackEnd/models/roleModel");
const Lots = require('../BackEnd/models/lotModel');
const jwt = require('jsonwebtoken');
const secretKey = "azertyuio@%123456";
const verifyToken = require("../apiRoute/verifyToken");
const Ticket = require('../BackEnd/models/tickeModel');
const { any, string, object } = require('@hapi/joi');
const { cast, result } = require('@hapi/joi/lib/base');
const  re  = require('request');
const cryptoo = require('crypto');
const nodemailer = require('nodemailer');
const { email } = require('../BackEnd/models/email');
//var {localStorage} = require("node-localstorage").LocalStorage;
var ObjectId = require('mongodb').ObjectID

let app = express();

exports.login =  async function(req,res){
        try{
            const user = await Users.findOne({email:req.body.email});
                    const email = req.body.email
                    const Password  = req.body.password
                    await Users.findOne({email:email}).then(existAdmin =>{
                        console.log(('aji'))
                        console.log(existAdmin.isAdmin)
                        console.log('hada admin')
                    if(existAdmin && existAdmin._id && existAdmin.isAdmin==true){
                            console.log('reeur')
                            bcrypt.compare(Password,  existAdmin.password,  async function(err , resp){
                                    
                                if(!err){
                                    if(resp){ 
                                        console.log('dazt l admin')
                                            const  AuthToken =  jwt.sign({_id : existAdmin._id , email : existAdmin.email}, secretKey, {
                                            expiresIn : '1h',
                                            
                                    })
                                        await res.json({status : 'yes' , data : {AuthToken, resp, existAdmin}})
                                     }else if(!resp){
                                    res.json({status : 'yes' , data : {existAdmin , resp}})
                                 }
                                }
                            })
                        }else{
                            if( existAdmin && existAdmin._id && existAdmin.isAdmin==false){
                                bcrypt.compare(Password,  existAdmin.password,  async function(err , resp){
                                   if(!err){
                                       if(resp){ 
                                               const  AuthToken =  jwt.sign({_id : existAdmin._id , email : existAdmin.email}, secretKey, {
                                               expiresIn : '1h',
                                       })
                                           await res.json({status : 'ok' , data : {AuthToken, resp, existAdmin}})
                                        }else if(!resp){
                                       res.json({status : 'ok' , data : {existAdmin , resp}})
                                    }
                                   }else{
                                   console.log('ma daztch')}
                               })   
                             }
                        }
                        console.log('exist user ', existAdmin)
                    }).catch(err =>{
                        res.json({status : 'error1', data : 'il ya une erreur'})
                    }) 
            
            }
         catch(err){
            console.log(err)
        }
    }
exports.verifyToken = (req,res,next) =>{
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
    console.log('coucou')
    if( req && req.decodedToken){
        res.json({status : 'ok' , data: 'ok'})  
    }else{
        res.json({status : 'erreur' , data: 'erreur'})
    }

}
exports.newE = async (req,res,next)=>{
    
    const result = await new Users({
        nom : req.body.nom,
        prenom : req.body.prenom,
        genre : req.body.genre,
        email : req.body.email,
        telephone : req.body.telephone,
        password : req.body.password,
        emailToken:cryptoo.randomBytes(64).toString('hex'),
        isAdmin:req.body.isAdmin,
        //idRole : req.body.idRole

    });
    const salt = await bcrypt.genSalt(10)
    await bcrypt.hash(req.body.password,salt).then(hashedPassword =>{
        console.log('hashed password', hashedPassword)
        result.password = hashedPassword;
    })
    await Users.create(result).then(userStoreData =>{
        if(userStoreData && userStoreData._id){
            console.log('user stored data',userStoreData)
            res.json({status :'yes', data:userStoreData})
        }
        else{
            res.json({status :'error'})
        }
    })
     
     await result.save();
}
exports.new = async (req,res,next)=>{
    
    const result = await new Users({
        nom : req.body.nom,
        prenom : req.body.prenom,
        genre : req.body.genre,
        email : req.body.email,
        telephone : req.body.telephone,
        password : req.body.password,
        emailToken:cryptoo.randomBytes(64).toString('hex'),
        isAdmin:req.body.isAdmin,
        //idRole : req.body.idRole

    });
    const salt = await bcrypt.genSalt(10)
    await bcrypt.hash(req.body.password,salt).then(hashedPassword =>{
        console.log('hashed password', hashedPassword)
        result.password = hashedPassword;
    })
    await Users.create(result).then(userStoreData =>{
        if(userStoreData && userStoreData._id){
            console.log('user stored data',userStoreData)
            res.json({status :'ok', data:userStoreData})
        }
        else{
            res.json({status :'error'})
        }
    })
     await result.save();
}
exports.verifUser= async(req,res)=>{
    try {
        const token=req.query.token
        const user= await Users.findOne({emailToken:token});
        if(user){
            user.emailToken=null
            user.isVerified=true 
            await user.save()
        }else{
            console.log('votre email nest pas en cours vérifier')
        }
    } catch (error) {
        
    }
}

exports.index = async(req,res)=>{
        const result = await Users.find().populate('idTicket').populate('idLot')
        //console.log('item set:', localStorage.getItem('counter1'))
        res.json({
            result : result.map(result=>{
                return{
                    _id : result._id,
                    nom : result.nom,
                    prenom : result.prenom,
                    genre : result.genre,
                    email : result.email,
                    telephone : result.telephone,
                    password : result.password,
                    idRole : result.idRole,
                    idLot : result.idLot,
                    idTicket: result.idTicket,

                }
            })
        })
}
exports.finduserbyid = async(req,res)=>{
    const uid = req.params.uid;
     const result = await Users.findById(uid).populate('idTicket').populate('idLot')
    //console.log('item set:', localStorage.getItem('counter1'))
    res.json({
        result:result.toObject(result=>{
            return{
                _id : result._id,
                nom : result.nom,
                prenom : result.prenom,
                genre : result.genre,
                email : result.email,
                telephone : result.telephone,
                password : result.password,
                idLot : result.idLot,
                idTicket: result.idTicket,
                Etat_P:result.Etat_P,
            }
        })
    })
}


exports.insertTicketById = async (req,res)=>{
    const uid = req.params.uid;
    const T = await new Ticket ({
        statusT: req.body.statusT,
        Prix: req.body.Prix,
        ref_participation:req.body.ref_participation
     }).save()
     /*const L = await new Lot({

     }).save()*/
     //console.log(id);
     const usrt = await  Users.findById(uid)
    // console.log('user:',ticket);
     usrt.idTicket.push(T);
    // usrt.idLot.push(L);
      usrt.save();

    res.json({
        message:'inserted'
    })

}
/*exports.indexTicktuser= async(req,res) => {
    const uid = mongoose.Types.ObjectId(req.params.uid.trim());
    const result = await Users.findById(uid)
    res.json({
        result : result.map((result) =>{
            return{
                _id : result._id,
                idTicket : result.idTicket,
            }
        })
    })
}*/
exports.insertByIdRole = async (req,res)=>{
    const rid = req.params.rid;

    
    const role = await new Roles({
       // _id : mongoose.Types.ObjectId,
        nom : req.body.nom,
     }).save()
     //console.log(id);
     const user = await  Users.findById(rid)
    // console.log('user:',user);
     user.idRole.push(role);
    // console.log(user.idRole.push(role));
    
     await user.save();

    res.json({
        message:'inserted'
    })

}

exports.insertByIdLot = async (req,res)=>{
    const lid = req.params.lid;
   
    const lot = await new Lots({
      
        // _id : mongoose.Types.ObjectId,
       nom : "test",
       description : "test",
       
     }).save()
     //console.log(id);
     const user = await  Users.findById(lid)
    // console.log('user:',user);
    console.log(test)
     user.idLot.push(lot);
    // console.log(user.idRole.push(role));
    
     await user.save();

    res.json({
        
        message:'inserted'
   

    })

}

exports.delete = (req,res) =>{
    uid=req.params.uid;
    Users.findByIdAndDelete(uid,function(err,user){
        if(err){
            res.json({
                status: 0,
                message: err,
                message: 'supprission echoue!'
            })
        }else {
            res.json({
            status: 1,
            message: 'votre compte est supprimer',
            data: user
        })
        }
        
    });
}
// Requires official Node.js MongoDB Driver 3.0.0+

// Requires official Node.js MongoDB Driver 3.0.0+

/*exports.Prix = async(req,res) =>{
    var uid =''
    uid=req.params.uid;
    console.log(uid);
    var options = {
        allowDiskUse: true
    };
    
    var pipeline = [
        {
            "$project": {
                "_id": 0,
                "tickets": "$$ROOT"
            }
        }, 
        {
            "$lookup": {
                "localField": "tickets._id",
                "from": "users",
                "foreignField": "idTicket",
                "as": "users"
            }
        }, 
        {
            "$unwind": {
                "path": "$users",
                "preserveNullAndEmptyArrays": false
            }
        }, 
        {
            "$match": {
                "users._id":new ObjectId(uid)
            }
        }, 
        {
            "$project": {
                "tickets.Prix": "$tickets.Prix",
                "_id": 0
            }
        }
    ];
    
    const cursor = await  Ticket.aggregate(pipeline, options)
    cursor.forEach(
        function(doc) {
            res.json({
                doc
            });
        }, 
        function(err) {
            client.close();
        }
    );
    
    
    
};*/
exports.updateGain = async(req,res) =>{
    const lid = req.params.lid;
    const nom=req.params.nom;
    const description=req.params.description
    const lot = await new Lots({
        nom: nom,
        description: description,
    }).save();
     const user = await  Users.findById(lid)

     user.idLot.push(lot);
    // console.log(user.idRole.push(role));
    
     await user.save();

    res.json({
        
        message:'inserted lot by user'
   

    })

}
   
exports.getRef_Participation = async(req,res) =>{
    var uid =''
    uid=req.params.uid;
    var options = {
        allowDiskUse: true
    };
    
    var  pipeline = [
        {
            "$project": {
                "_id": 0,
                "tickets": "$$ROOT"
            }
        }, 
        {
            "$lookup": {
                "localField": "tickets._id",
                "from": "users",
                "foreignField": "idTicket",
                "as": "users"
            }
        }, 
        {
            "$unwind": {
                "path": "$users",
                "preserveNullAndEmptyArrays": false
            }
        }, 
        {
            "$match": {
                "users._id":new ObjectId(uid),
                "tickets.Prix":{
                    "$gte": "49"
                }
            }
        }, 
        {
            "$project": {
                "tickets.ref_participation": "$tickets.ref_participation",
                "_id": 0
            }
        }
    ];
    
    const cursor = await  Ticket.aggregate(pipeline, options)
if(cursor.length){
    cursor.forEach(
        function(doc) {
            res.json({
                doc
                
            });
        }, 
        function(err) {
            res.json({
                err
            });
        }
    );
}else{
        res.json({
            message:'votre budget est insuffisant pour participer!'
        });
    }
  
}

exports.updateEtat_P = async(req,res) =>{
    const uid = req.params.uid;
    const result = await Users.findByIdAndUpdate(uid,{
        $set:{
            Etat_P:true,
            Etat_obtention:'En cours...'
        }
    })
    result.save();
    res.json({
        
        message:'Update Etat_P by user'
   

    })

};
exports.updateEtat_obtention = async(req,res) =>{
    const uid = req.params.uid;
    const result = await Users.findByIdAndUpdate(uid,{
        $set:{
            Etat_obtention:'Recu'
        }
    })
    result.save();
    res.json({
        
        message:'Update Etat_obtention  by user'
   

    })

};
exports.search=async(req,res)=>{
    req.params.body=true;
    const data = await Users.find(
        {
           "$or":[
            {
                Etat_P:{$in:req.params.body},
            }
           ]
        }
     
       
    ).populate("idLot").populate("idTicket")
    res.send(data)
}
exports.searchUserNOP=async(req,res)=>{
    req.params.body=false;
    const data = await Users.find(
        {
           "$or":[
            {
                Etat_P:{$in:req.params.body},
            }
           ]
        }
     
       
    ).populate("idLot").populate("idTicket")
    res.send(data)
}
exports.getLots_H = async(req,res) =>{
    var uid =''
    uid=req.params.uid;
    var options = {
        allowDiskUse: true
    };
    
    var pipeline = [
        {
            "$project": {
                "_id": 0,
                "lots": "$$ROOT"
            }
        }, 
        {
            "$lookup": {
                "localField": "lots._id",
                "from": "users",
                "foreignField": "idLot",
                "as": "users"
            }
        }, 
        {
            "$unwind": {
                "path": "$users",
                "preserveNullAndEmptyArrays": false
            }
        }, 
        {
            "$match": {
                "users._id": new ObjectId(uid),
                "users.Etat_P": true
            }
        }, 
        {
            "$project": {
                "lots.description": "$lots.description",
                "_id": 0
            }
        }
    ];
    
const result = await Lots.aggregate(pipeline, options)
 if(result.length){
    res.json({
      result:result.concat(doc=>{
        return{
            doc
        }
    })
})
   }else{
    res.json({
        message:'vous avez aucun gain!'
    });
  }

}
exports.sendemailsubscribed = async(req,res)=>{
   const  email=req.params.email
  
    var options =  {
        'method': 'POST',
        'url': 'https://us8.api.mailchimp.com/3.0/lists/9954c5ed4e/members',
        'headers': {
            'Authorization': 'Basic bW91cmFkX2FtZWhpb3U6OTM5ZjhhN2UwYzAwMjhhMDdkZDA4ZDMxNTA1MDJjMDYtdXM4',
            'Content-Type': 'application/json',
            'Cookie': 'ak_bmsc=00238280CCA3ED68BD0116FA024061A9~000000000000000000000000000000~YAAQE+zAF5HouTuEAQAAa0sSRRFza2OfUOOBBLF/XtadoPWXTtS10kkwaPBvsMxOvTj/q0KbI3V9JloPqyyAw7wbANtfWtXTx/h/qCQQlg1G40iOkYEYqb6/OcGueZEJCjtaR6Dn6gD9NsacpJrBm1+7BwTtZOB47+g1aNQZ3ygGpbqWA8cbN+pHdSZahH6cG+/n0FKpqYQ93g/W6Y8PGaxx4Q6ojsHxJw2YtZTiZ2w255BPohsTDiZurRMf/8Hgq85TuQX2/00gFk43350NdQL8HRFCXWRxq3mSIYvq2jAZyMFYnVm9+Mi07gjtyCFdlF2ok1+768UjGnPzaMXr+/4c9InbWfFR10W/BAUItrRY/NGIVUnrtv/VLMEFoefulw==; bm_sv=4046AC3922B8AF891EC18D6747383D04~YAAQE+zAF6nIujuEAQAAbE5CRRHs6OJ7ULHNYezvYCuEocRRjio4ayUsOz9vRH5J/otaLavNr6RKLZ+7+NgdVGBjm7+zGSR7Yx9ilV00CXgZhoZ7S77BMHi9OR825n1O7pa92Ih3qsP2nhsEc8HMa2uJOgHZ3shWQjqyXLsjgfnee9V1ff+Z3jeys0KShep8BfsXKrhpU6HRew03FjwiT6R7R1aa1ufjlDnFqe90/Md3WPpTxAD8akY+Qgqmq/peQCztFheEUw==~1'
        },
        body: JSON.stringify({
            "email_address": email,
            "status": "subscribed"
        })
    };
    re(options,(error,response)=> {
        if (error) throw new Error(error);
       //console.log(response.body)
    
       res.json({

        data: response.body
          
      })
      });
    


}
exports.identiqueTicketq=async(req,res)=>{
    const RefT=req.params.RefT;
    var query = {
        "ref_participation":parseInt(RefT),
        "Prix": {
            "$gte":49
        }
    };
 const cursor = await Ticket.find(query)
  if(cursor.length) {
    cursor.forEach(
        function(doc) {
            res.json({
                doc
                
            });
        }, 
        function(err) {
            res.json({
                err
            });
        }
    );
       }else{
        res.json({
           doc:null
        });
      }
    
   
}

exports.addticketUser=async(req,res)=>{
   const ticket=req.params.ticket;
   const uid=req.params.uid;
    let test;
    
    var query = {
        "ref_participation":parseInt(ticket)
    };
  
    const cursor = await Ticket.find(query)
    cursor.forEach(
        function(doc) {
            test=doc
        }, )
    //console.log(cursor)
    const user = await  Users.findById(uid)
    // console.log(user)
    user.idTicket.push(test);
    await user.save();
    res.json({
        
        message:'inserted ticket by user'
   

    })
   
}
exports.emailuse= async(req,res)=>{
    const email=req.params.email;
   

   
    let result = await Users.find({ email : email}).select('email')
    if(result.length){
        res.json({
          result:result.concat(doc=>{
           
                doc
            
        })
    })
 }else{
    console.log("ce compte n'existe pas");
}
}
