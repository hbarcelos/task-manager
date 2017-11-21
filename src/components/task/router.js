const { Router } = require('express')
const { makeJSONRoute } = require('../../utils/routing')
const { create, update, remove, getAll, getById } = require('./controller')

const router = Router()

router.post('/tasks', makeJSONRoute(create))
router.get('/tasks', makeJSONRoute(getAll))
router.patch('/tasks/:id', makeJSONRoute(update))
router.get('/tasks/:id', makeJSONRoute(getById))
router.delete('/tasks/:id', makeJSONRoute(remove))

module.exports = router
