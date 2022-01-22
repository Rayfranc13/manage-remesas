const{request,response}=require('express')
const Beneficiario=require('../models/beneficiario')

const getBeneficiario=async(req=request,res)=>{
const{id}=req.body
const beneficiarios=await Beneficiario.find({usuario_id:id})
const cant=await Beneficiario.countDocuments({usuario_id:id})
res.json({
    cantidad:cant,
beneficiarios
})
}

module.exports={
    getBeneficiario
}