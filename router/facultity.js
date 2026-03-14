const router = require('express').Router()

const { createFaculty } = require('../controller/facultyController')

router.post('/faculty', createFaculty);

module.exports = router