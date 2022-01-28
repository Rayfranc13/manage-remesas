const{request,response}=require('express')
const Beneficiario=require('../models/beneficiario')

const getBeneficiarios=async(req=request,res)=>{
    const {id}=req.payload

    const beneficiarios=await Beneficiario.find({usuario_id:id})
res.json({
    beneficiarios
})
}

module.exports={
    getBeneficiarios
}