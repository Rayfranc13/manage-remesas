const express =require('express');
const cors = require('cors');
const { dbConnection } = require('../db/config');

class Server{

     constructor (){
        this.app=express()
        this.port=process.env.PORT
        this.ConectarDB() 
        this.Middlewares();
        this.Routes();
        this.Listen();
    }



Middlewares(){
    this.app.use(express.urlencoded({extended:false}))
    this.app.use(express.static('public'))
    this.app.use(express.json())
    this.app.use(cors())
}




Routes(){

this.app.use('/usuarios',require('../routes/user'))
    this.app.use('/auth',require('../routes/auth'))
}

async ConectarDB(){
    await dbConnection()
}


Listen(){

    this.app.listen(this.port||5000,()=>
    console.log(`Server on port:${this.port}`))

}







}

module.exports=Server;