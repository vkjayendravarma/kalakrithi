var express = require('express');
var router = express.Router();

var user = require("../controllers/userCtrl");

router.post("/register", user.create);
router.post("/checkId", user.ShowUserData);
router.post("/checkreg", user.ShowUserDataOnRegNo);

router.get("/check", function(req, res){
  if(req.query.id){
    res.render("check.html", {resp: {action: "/checkId", id: true}});
  }
  else if(req.query.regno){
    res.render("check.html", {resp: {action: "/checkreg", id: false}})
  }
  else{
    res.sendFile("select.html", {root: "views"})
  }
});


router.get("/auditions", function(req, res){
  res.status(200).sendFile("auditions.html", {root: "public"})
})

// router.get("/test", user.test);

module.exports = router;
