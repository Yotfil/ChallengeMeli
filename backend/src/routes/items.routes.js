const express = require('express')
//Controllers
const ItemsController = require('../controllers/items.controllers')

const router = express.Router()

router.get('/items', ItemsController.getItems)
router.get('/items/:id', ItemsController.getItem)

module.exports = router
