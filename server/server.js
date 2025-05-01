require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/user_route");
const authRoute = require("./routes/auth_route");



// express app
const app = express();

// middleware
app.use(express.json());

// cors
app.use(cors());

//routes
app.use("/user",userRoute);
app.use("/auth", authRoute);
// connect to db
var option = { dbName: "mydb" };
mongoose
  .connect(process.env.MONGO_URL, option)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// get all users
/*app.get('/', (req, res) => {
  UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

// get user by ID 
app.get('/getuser/:id', (req, res) => { 
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

// update user
app.put('/updateUser/:id', (req, res) => {
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
app.post('/createUser', (req, res) => {
  UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

//delete user
app.delete('/deleteUser/:id', (req,res)=> {
  const id = req.params.id;
  UserModel.findByIdAndDelete({_id:id})
  .then(res => res.json(res))
  .catch(err => res.json(err))
})*/