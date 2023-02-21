const mongoose = require('mongoose');




const emailShema = mongoose.Schema({
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
    email : {
        type: String,
        required: true,
        minlenght: 3,
        maxlength:255,

    },
    telephone : {
        type: Number,
        required: true,
        maxlength:15
    },
    mesage: {
        type: String,
        required: true,
    },
    Etat_repond:{
        type: String,
        required: false,
        minlenght: 3,
        maxlength:255
    },
});


let email = module.exports = mongoose.model('email', emailShema);
exports.email = email;
//exports.validate = validateUser;