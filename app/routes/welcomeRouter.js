const express = require('express')
const router = express.Router()
const RoadController = require("../http/controller/roadController")
router.get("/" , RoadController.sayhellow)

module.exports = router