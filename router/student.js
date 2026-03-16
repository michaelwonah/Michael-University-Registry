const router = require('express').Router()

const { createStudent } = require('../controller/studentController');

router.post('/student/:departmentId', createStudent)

module.exports = router