const {Schema,model}=require('mongoose')

const BeneficiarioSchema= Schema({
     nombre:{
        type:String,
        required:[true,'El nombre es obligatorio']
    
     },
     apellido:{
        type:String,
        required:[true,'El apellido es obligatorio']
    },
    tarjeta:{
        type:Number,
        required:[true,'La terjeta es obligatoria']
    },
    usuario_id:{
        type:String,
        required:[true,'EL campo de usuario es obligatorio']
    }

})

module.exports= model('Beneficiario',BeneficiarioSchema)