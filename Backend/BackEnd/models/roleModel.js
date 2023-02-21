const mongoose = require('mongoose');
//const  Schema  =require('mongoose');




const userShema = mongoose.Schema({
     // _id : mongoose.Schema.Types.ObjectId,
    nom : {
        type: String,
        required: true,
        minlenght: 3,
        maxlength:50
    },
    //idUser:[{type: mongoose.Schema.Types.ObjectId, ref :'User'}],

});
/*function validateRole(role){
    const schema = {
        nom : joi.string().min(3).max(50).required(),
    }
    console.log(joi.Validate(role,schema));
}*/

let Role = module.exports = mongoose.model('Role', userShema);
exports.Role = Role;
//exports.validate = validateRole;