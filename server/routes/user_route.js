var express = require("express");
var UserModel = require("../models/User");

var router = express.Router();

// get all users
router.get('/', (req, res) => {
    UserModel.find({})
      .then(users => res.json(users))
      .catch(err => res.json(err));
  });
  
  // get user by ID 
 router.get('/getuser/:id', (req, res) => { 
    const id = req.params.id;
    UserModel.findById({ _id: id })
      .then(user => res.json(user))
      .catch(err => res.json(err));
  });
  
  // update user
  router.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate(
      { _id: id },
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        address: req.body.address,
      })
      .then(user => res.json(user))
      .catch(err => res.json(err));
  });
  
  // create user
  router.post('/createUser', (req, res) => {
    UserModel.create(req.body)
      .then(user => res.json(user))
      .catch(err => res.json(err));
  });
  
  //delete user
  router.delete('/deleteUser/:id', (req,res)=> {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
  })


  module.exports = router;