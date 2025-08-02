const express=require("express");
const router=express.Router();

router.get("/allHoldings",async(req,res)=>{
    let allHolding= await HoldingsModel.find({});
    res.json(allHolding)
})

module.exports=router;