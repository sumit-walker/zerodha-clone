const express=require("express");
const bcrypt =require("bcryptjs");
const User = require("../model/users.js");
const passport = require("passport");
const router=express.Router();

router.post("/signup",async(req,res)=>{
    const {firstName,lastName,email,password}=req.body;
   

    try{
        const fullName=`${firstName} ${lastName}`;
        const user=await User.findOne({email});
        if(user){
            return res.status(400).json({message:"user already exist"});
        }
        const hashedPassword =await bcrypt.hash(password,10);
        const newUser =new User({name:fullName,email,password:hashedPassword});

        await newUser.save();

        res.status(201).json({message:"Signup successful"});




    }catch(err){
        console.error(err.message);
        res.status(500).json({message:"server error"});
    }
});


router.post("/login",(req,res,next)=>{
    passport.authenticate("local",(err,user,info)=>{
        if(err) return next(err);
        if(!user){
            return  res.status(400).json({message:info.message || "Invalid credentials"});
        }

        req.logIn(user,(err)=>{
            if(err) return next(err);
            res.json({message:"Login successful" , user:{id:user._id, name:user.name, email:user.email}});
        });
    })(req,res,next);
})



router.post("/logout",(req,res)=>{
    req.logout((err)=>{
        if(err){return res.status(500).json({message:"Logout falied"})}
        req.session.destroy(()=>{
            res.clearCookie("connect.sid");
            res.json({message:"Logout successful"});
        });
    });
});

router.get("/me",(req,res)=>{
    if(req.user){
        res.json({id:req.user._id,name:req.user.name,email:req.user.email, activities:req.user.activities   });
    }else{
        res.status(401).json({message:"Not authenticated"});
    }
})

module.exports=router;


