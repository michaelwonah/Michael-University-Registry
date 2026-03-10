const router = require('express').Router()

const { createDepartment } = require('../controller/depaertmentController')

router.post('/department/:facultyId', createDepartment);

module.exports = router