const express =require('express');


class Server{

    constructor(){
        this.app=express()
        this.port=process.env.SERVER_ON_PORT
        this.Middlewares();
        this.Routes();
        this.Listen();
    }



Middlewares(){
    this.app.use(express.urlencoded({extended:false}))
    this.app.use(express.static('public'))
    this.app.use(express.json())
}




Routes(){

this.app.use('/usuarios',require('../routes/user'))
    
}


Listen(){

    this.app.listen(this.port,()=>
    console.log(`Server on port:${this.port}`))

}







}

module.exports=Server;