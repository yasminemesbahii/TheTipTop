const { validate } = require('@hapi/joi/lib/base');
let bcrypt = require('bcrypt');
const Lots = require('../BackEnd/models/lotModel');
const Users = require('../BackEnd/models/userModel');
const Tickets = require('../BackEnd/models/tickeModel');



exports.new =  (req,res,next)=>{
    
    const result =  new Lots({
        nom : req.body.nom,
        description : req.body.description,
        ref_participation : req.body.ref_participation,
        reception : req.body.reception
    })
    .save();
    res.json({
        message:"Lots Inserted"
    })


}

exports.index = async(req,res) => {
    const result = await Lots.find()
    res.json({
        result : result.map((result) =>{
            return{
                _id : result._id,
                nom : result.nom,
                description : result.description,
                ref_participation : result.ref_participation,
                reception : result.reception,
            }
        })
    })
}
exports.insertLotByIdUser = async (req,res)=>{
    const lid = req.params.lid;

    
    const user = await new Users({
        nom : req.body.nom,
        prenom : req.body.prenom,
        genre : req.body.genre,
        email : req.body.email,
        telephone : req.body.telephone,
        password : req.body.password,
     }).save()
     //console.log(id);
     const lot = await  Lots.findById(lid)
     console.log('user:',lot);
     lot.idUser.push(user);
     await lot.save();

    res.json({
        message:'inserted'
    })

}

exports.insertLotByIdTicket = async (req,res)=>{
    const tid = req.params.tid;

    const ticket = await new Tickets({
        statusT : req.body.statusT,
     }).save()
     //console.log(id);
     const lot = await  Lots.findById(tid);
     console.log('user:',lot);
     lot.idTicket.push(ticket);
     await lot.save();

    res.json({
        message:'inserted'
    })

}
exports.delete = (req,res) =>{
    Lots.findByIdAndDelete(req.params.id,function(err,lot){
        if(err){
            res.json({
                status: 0,
                message: err,
                message: 'le id existe pas, changeé le!'
            })
        }else {
            res.json({
            status: 1,
            message: 'bravo lot suprrimer',
            data: lot
        })
        }
        
    });
   
}