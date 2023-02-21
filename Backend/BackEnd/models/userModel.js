const mongoose = require('mongoose');
const  Schema  =require('mongoose');

const joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const config = require('../../config/default.json');
const { Role } = require('./roleModel');
const { string } = require('@hapi/joi');
const { required } = require('@hapi/joi/lib/base');


const userShema = mongoose.Schema({
   // _id : mongoose.Schema.Types.ObjectId,
    nom : {
        type: String,
        required: true,
        minlenght: 3,
        maxlength:50
    },
    prenom : {
        type: String,
        required: true,
        minlenght: 3,
        maxlength:50
    },
    genre : {
        type: String,
        required: true,
        minlenght: 3,
        maxlength:50
    },
    email : {
        type: String,
        required: true,
        minlenght: 3,
        maxlength:255,
        unique: true

    },
    telephone : {
        type: Number,
        required: true,
        maxlength:15
    },
    password :{
        type: String,
        required: true,
        minlenght: 3,
        maxlength:255

    },
    creationDate : {
        type: Date,
        default: Date.now

    },
    Etat_P : {
        type: Boolean,
        default: false,
    },
    Etat_obtention:{
        type: String,
        required: false,
        minlenght: 3,
        maxlength:255
    },
    isAdmin  : {
        type: Boolean,
        default: false,
        required: false,
    },
    
    idRole: [{type: mongoose.Schema.Types.ObjectId, ref :'Role'}],
    idTicket: [{type: mongoose.Schema.Types.ObjectId, ref :'Ticket'}],
    idLot:[{type: mongoose.Schema.Types.ObjectId,ref:'Lot'}],

    
});

/*function validateUser(user){
    const Schema = {
        nom : joi.string().min(3).max(50).required(),
        prenom : joi.string().min(3).max(50).required(),
        genre : joi.string().min(3).max(50).required(),
        email : joi.string().min(3).max(255).required().email(),
        telephone : joi.string().min(3).max(50).required(),
        password : joi.string().min(3).max(50).required(),
        id : joi.idRole().min(3).max(255).required(),
        
    }
    console.log(joi.Validate(user,Schema));
}
*/
let User = module.exports = mongoose.model('User', userShema);
exports.User = User;
//exports.validate = validateUser;