const express=require("express");
const { PositionsModel } = require("../model/PositionsModel.js");
const router=express.Router();


router.get("/allPositions",async(req,res)=>{
    let allPositions= await PositionsModel.find({});
    res.json(allPositions);
});

module.exports=router;