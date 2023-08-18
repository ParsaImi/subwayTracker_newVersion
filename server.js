
const mongoose = require('mongoose')
const roadController = require("./app/http/controller/roadController")
const path = require("path")



  const welcomeRouter = require("./app/routes/welcomeRouter")
  const roadRouter = require("./app/routes/roadRouter")
  const roadOptionRouter = require("./app/routes/roadOptionRouter")
  const errorController = require("./app/http/controller/errorController")
  const graphRouter = require("./app/routes/graphRouter")
  const AllRoutes = require("./app/routes/router")


  



module.exports = class Application{
  #express = require("express")
  #app = this.#express()
  constructor(PORT , db_url){
    this.configApplication()
    this.configDatabase(db_url)
    this.createRoutes()
    this.createServer(PORT)
    this.errorHandler()
  }
  configApplication(){
    this.#app.use(this.#express.json())
    this.#app.use(this.#express.urlencoded({extended : true}))
    // this.#app.use(this.#express.static(path.join(__dirname, 'public')))
  }

  createServer(PORT){
    const server = this.#app.listen(PORT , () => {
      console.log('server waiting for request');
      
  })
  }

  configDatabase(db_url){
    mongoose.connect(db_url).then(() => {
      console.log('app connected to the DataBase');
   })
  }

  errorHandler(){

    this.#app.use((req , res , next) => {
      return res.status(404).json({
        status : 404,
        success : false,
        message : "page is not found!"
      })
    })
    this.#app.use((err , req , res , next) => {
      try {
        this.#app.use(AllRoutes)
      } catch (error) {
        next(error)
      }
    })
  }

  createRoutes(){
    this.#app.get("/" , (req , res , next) => {
      res.json({
        message : "welcome to proj",
        status : 200
      })
    })
  }
}