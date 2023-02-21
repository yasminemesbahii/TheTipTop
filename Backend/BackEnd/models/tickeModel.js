const mongoose = require('mongoose');
const { Lot } = require('./lotModel');
const  Schema  =require('mongoose');


const userShema = mongoose.Schema({
  //  _id : mongoose.Schema.Types.ObjectId,
    statusT : {
        type: String,
        required: true,
        minlenght: 3,
        maxlength:50
    },
    Prix : {
        type: Number,
        required: true,
        minlenght: 3,
        maxlength:50
    },
    ref_participation : {
        type: Number,
        required: true,
        minlenght: 3,
        maxlength:50,
        unique: true
    },
    utilise: {
        type: Boolean,
        default: false,
        required:false,
    },
  // idLot: [{type:mongoose.Schema.Types.ObjectId, ref :'Lot'}],
    //idUser: [{type: mongoose.Schema.Types.ObjectId, ref :'User'}],
    


});
/*function validateTicket(ticket){
    const schema = {
        statusT : joi.string().min(3).max(50).required(),
        lot : joi.Lot().min(3).max(255).required(),
    
    }
    console.log(joi.Validate(ticket,schema));
}*/

let Ticket = module.exports = mongoose.model('Ticket', userShema);
exports.Ticket = Ticket;
//exports.Validate = validateTicket;