const express=require("express");
const router=express.Router();


router.get("/allOrders",async(req,res)=>{
    let allOrder=await  OrdersModel.find({});
    res.json(allOrder)
});

module.exports=router;