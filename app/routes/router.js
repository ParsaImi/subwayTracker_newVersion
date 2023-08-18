const router = require("express").Router()
const graphRouter = require("./graphRouter")
const roadRouter = require("./roadRouter")
const roadOptionRouter = require("./roadOptionRouter")
const welcomeRouter = require("./welcomeRouter")

router.use("/road" , roadRouter)
router.use("/op" , roadOptionRouter)
router.use("/" , welcomeRouter)
router.use("/graph" , graphRouter)

module.exports = {
    router
}