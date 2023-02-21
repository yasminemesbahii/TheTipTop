let router =require('express').Router();
const userController= require('../Controllers/userController');
const ticketController= require('../Controllers/ticketController');
const roleController= require('../Controllers/roleController');
const lotController= require('../Controllers/lotController');
const emailController=require('../Controllers/emailController')
const { append, get } = require('express/lib/response');
//const lotuser = require('../Controllers/lotuserController');
const express = require('express')
const cors = require('cors');


router.get('/' , function(req,res){
    res.json({
        status: 1,
        message: 'hello'
    });
});
router.route('/users/')
.get(userController.index)
.post(userController.new);
router.route('/users/EMP')
.post(userController.newE);
router.route('/email/:nom/:prenom/:email/:telephone/:mesage')
.post(emailController.new)
router.route('/email')
.get(emailController.index)
router.route('/login',cors())
.post(userController.login);
router.route('/dashbord')
.get(userController.verifyToken);
router.route('/users/:uid')
.delete(userController.delete);


//router.route('/users/:rid')
//.post(userController.insertByIdRole)
router.route('/addgain/:lid/:nom/:description')
.post(userController.updateGain);
router.route('/updateEtat/:uid/')
.put(userController.updateEtat_P);
router.route('/users/:uid')
.post(userController.insertTicketById)
router.route('/getRef/:uid')
.get(userController.getRef_Participation);
router.route('/userslot/:lid')
.post(userController.insertByIdLot);
router.route('/finduserbyid/:uid')
.get(userController.finduserbyid);
router.route('/chercherUser/')
.get(userController.search);
router.route('/emailuse/:email')
.get(userController.emailuse);
router.route('/ChercherUserNop/')
.get(userController.searchUserNOP)
router.route('/UpdateEtatobtention/:uid')
.put(userController.updateEtat_obtention)
router.route('/UpdateEtatRepond/:uid')
.put(emailController.updateEtat_repond)
router.route('/getLots_H/:uid')
.get(userController.getLots_H)
router.route('/addticketUser/:uid/:ticket')
.post(userController.addticketUser)
router.route('/EmailChimp/:email')
.post(userController.sendemailsubscribed)
router.route('/tickets/')
.get(ticketController.index)
.post(ticketController.new)
router.route('/AddticketR/:num')
.post(ticketController.AddTicketAuto)
router.route('/tickets/:id')
.delete(ticketController.delete);
router.route('/identiqueTicketq/:RefT')
.get(userController.identiqueTicketq)
router.route('/tickets/:tid')
.post(ticketController.insertTicketByIdlot);
router.route('/ChangerEtatUtiliseT/:Ref')
.put(ticketController.updateEtat_utilise);
router.route('/AfficherTicketU/')
.get(ticketController.Ticket_etatU);
router.route('/AfficherTicketNU/')
.get(ticketController.Ticket_etatNU);
router.route('/chercherUser/')
.get(userController.search);
router.route('/roles/')
.get(roleController.index)
.post(roleController.new)
router.route('/roles/:id')
.delete(roleController.delete);

router.route('/roles/:rid')
.post(roleController.insertByIdUser);


router.route('/lots/')
.get(lotController.index)
.post(lotController.new)
router.route('/lots/:id')
.delete(lotController.delete);

router.route('/lots/:lid')
.post(lotController.insertLotByIdUser);
router.route('/lots/:tid')
.post(lotController.insertLotByIdTicket);


module.exports = router;