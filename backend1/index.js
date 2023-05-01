//--- Importing all required modules ----
const cors = require('cors');
const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


//Declaring PORT NUMBER
const PORT = process.env.PORT || 5000

// Declaring Express App
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());


const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    location:String,
    orders:[
        {
            name:String,
            price:Number,
            qty:Number,
            size:String
        }
    ]
})

const User = new mongoose.model("Tuser",userSchema);

MONGO_URL = "mongodb+srv://tanmay:tanmay1234@cluster0.eoluy5x.mongodb.net/?retryWrites=true&w=majority"

// Connecting Database
mongoose.connect(MONGO_URL)
.then(console.log("Connected to DB"))
.catch((err)=>{
    console.log(err)
})

//--------- User Management API -----------------
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/"+"index.html")
})

//------------------------USER API ------------------------------

// Create User
app.post('/tn/user/new' ,async(req,res)=>{
    const user = await User.create(req.body)
    res.status(201).json({
        success:true,
        user
    })
}) 

// Read User
app.get('/tn/user/' ,async(req,res)=>{
    const {email}=req.query
    const users = await User.findOne({email})
    res.status(200).json({
        success:true,
        users
    })
})

app.patch('/tn/user/addorder',async(req,res)=>{
    const {id,orders}=req.body
    let users=await User.findById(id).exec()
    users.orders=orders
    

    const response=await users.save()
    res.status(200).json({
        success:true,
        response
    })

})

app.listen(PORT,()=>{
    console.log("Server is working at http://localhost:5000");
})