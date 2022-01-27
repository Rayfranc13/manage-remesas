const{request,response}=require('express')
const Beneficiario=require('../models/beneficiario')

const getBeneficiarios=async(req=request,res)=>{
    const payload=req.payload
res.json({
    payload
})
}

module.exports={
    getBeneficiario
}