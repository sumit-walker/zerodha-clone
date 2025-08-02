require('dotenv').config();
const express=require("express");
const mongoose=require("mongoose");
const bodyParser= require("body-parser");
const session=require("express-session");
const passport=require("passport");
const flash=require("connect-flash");// it is used to flash messages to the user
const cors=require("cors");

const {HoldingsModel}=require("./model/HoldingsModel.js")
const {PositionsModel}=require("./model/PositionsModel.js")
// const {OrdersModel}=require("./model/OrderModel.js")
const {WatchListModel} =require("./model/WatchListModel.js")
const User = require("./model/users.js");

const userRouter = require("./routes/user.js");
const holdingsRouter = require("./routes/Holdings.js"); 
const positionsRouter = require("./routes/positions.js");
const initializePassport = require("./config/passport.js");



const PORT = process.env.PORT ||2020;
const URL = process.env.MONGO_URL;
const app=express(); 





// it is used to allow cross-origin requests
app.use(cors({
    origin:["http://localhost:3001","http://localhost:3000"],
    credentials:true
}));

app.use(bodyParser.json())

// Middleware to parse request body
app.use(express.json());// This middleware parses incoming JSON request bodies
app.use(express.urlencoded({ extended: true }));// This middleware parses incoming URL-encoded form data (useful for traditional forms)

app.use(
    session({
        secret:process.env.SESSTION_SECRET || "hellojii123456",
        resave:false,
        saveUninitialized:false,
        cookie: { 
            domain:"localhost",
            path:"/",
            httpOnly:true,// This prevents client-side JavaScript from accessing the cookie
            secure:false // Set to true if using HTTPS
         }
    })
);


app.use(flash());

//Initialize passport
initializePassport(passport)
app.use(passport.initialize());
app.use(passport.session());









app.use("/", userRouter);

app.get("/allHoldings",async(req,res)=>{
    let allHolding= await HoldingsModel.find({});
    res.json(allHolding)
});

app.get("/allPositions",async(req,res)=>{
    let allPositions= await PositionsModel.find({});
    res.json(allPositions);
});


app.get("/allwatchlist",async(req,res)=>{
    let allWatchlist=await WatchListModel.find({});
    res.json(allWatchlist);

    console.log("all watchlist",allWatchlist);
})




app.get("/check-auth", (req, res) => {
    res.json({ isAuthenticated: !!req.user });
});



app.post("/userActivities",async(req,res)=>{

    const { userId, name, qty, price, model } = req.body;

    try{
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({message:"user not found"});
        }

        user.activities.push({name,qty,price,model});
        await user.save();

        res.status(200).json({message:"Activity added successfully"});

    }catch(err){
        console.log(err);
        res.status(500).json({message:"Server error"});
    }

    
})



app.listen(PORT,()=>{
    console.log("App started!");
    mongoose.connect(URL);
    console.log("DB connected");
})