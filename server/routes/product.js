import express from "express";
import KPI from "../models/KPI.js";

const router= express.Router();

router.get("/products",async(req,res)=>{
    try{
        const kpis= await KPI.find();
        res.status(200).json();
    }catch(error){
        res.status(404).json({message:error.message});
    }
})

export default router;