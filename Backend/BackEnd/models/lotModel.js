const mongoose = require('mongoose');
//const { User } = require('./userModel');
const  Schema  =require('mongoose');





const userShema = mongoose.Schema({
   // _id : mongoose.Schema.Types.ObjectId,
    nom : {
        type: String,
        required: false,
        minlenght: 3,
        maxlength:50
    },
    description: {
        type: String,
        required: false,
        minlenght: 3,
        maxlength:200
    },
  
   
//idUser: [{type: mongoose.Schema.Types.ObjectId, ref :'User'}],
idTicket: [{type: mongoose.Schema.Types.ObjectId, ref :'Ticket'}],

});
/*function validateLot(lot){
    const schema = {
        nom : joi.string().min(3).max(50).required(),
        description : joi.string().min(3).max(255).required(),
        ref_participation : joi.Number().min(3).max(50).required(),
        reception : joi.string().min(3).max(255).required(),
        idUser : joi.string().min(3).max(255).required(),

        
    }
    console.log(joi.Validate(lot,schema));
}*/


let Lot = module.exports = mongoose.model('Lot', userShema);
exports.Lot = Lot;
//exports.Validate = validateLot;
