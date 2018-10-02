var crypto = require("crypto");
var jwt = require("jsonwebtoken");

var db = require("../models/db");
var config = require("../config/config");
var utilities = require("../utilities/utilities");

module.exports.create = function(req, res){

    console.log("The request body is");
    console.log(req.body);
    if(!req.body.first_name || !req.body.last_name || !req.body.regno || !req.body.email || !req.body.phone_no || !req.body.year || !req.body.institute || !req.body.club ){
        res.status(500).json({success: false, message: "All fields are required"});
        return;
    }

    if(req.body.regno.length < 10){
      res.send("Looks like there is an issue with the registration number.");
      return;
    }

    if(req.body.phone_no.length != 10){
      res.send("Looks like there is an issue with the phone number.");
      return;
    }

    // Handle the issue with good UX

    var create_object = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      regno: req.body.regno,
      email: req.body.email,
      phone_no: req.body.phone_no,
      institute: req.body.institute,
      club: req.body.club,
      year: req.body.year
    }
    // console.log("\n\n\n\n");
    // console.log(create_object);
    db.users.create(create_object)
    .then(user => {
        var message = "Thank you for registering with us. Your unique Id is:  " + user.id;
        var resp = {id: user.id, message: message}
        res.status(200).render("after_registration.html", {resp: resp})
    })
    .catch(function(err){
        console.log(err);
        res.status(500).json(err);
    });
};



module.exports.getAll = function(req, res){
    db.users.findAll()
    .then(users => {
        res.status(200).json({success: true, users: users});
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({success: false, error: err});
    })
};

module.exports.getAllOfTeam = function(req, res){
    db.users.findAll()
    .then(users => {
        res.status(200).json({success: true, users: users});
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({success: false, error: err});
    })
};


module.exports.ShowUserData = function(req, res){
    db.users.findOne( {where: {id: req.body.id } })
    .then(user => {
      res.status(200).render("show_data.html", {resp: user});
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({success: false, error: err});
    })
};


module.exports.ShowUserDataOnRegNo = function(req, res){
    db.users.findAll( {where: {regno: req.body.regno } })
    .then(user => {
      var resp = {
        first_name: user[0].first_name,
        last_name: user[0].last_name,
        regno: user[0].regno,
        email: user[0].email,
        phone_no: user[0].phone_no,
        institute: user[0].institute,
        year: user[0].year

      };
      var club = "";
      for(var i=0; i<user.length; i++){
        club +=  user[i].club + ", ";
      }
      console.log("The club is: " + club);
      resp.club = club;
      res.status(200).render("show_data.html", {resp: resp});
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({success: false, error: err});
    })
};


// module.exports.test = function(req, res){
//   console.log("Testing the app");
//   var resp = { regno: '1210315909',
//     first_name: 'LHV',
//     last_name: 'LHVLJV',
//     phone_no: '9666807066',
//     email: 'foo@bar.com',
//     year: '2',
//     institute: 'GIS',
//     club: 'Anchoring' };
//   res.status(200).render("show_data.html", {resp: resp});
// };
