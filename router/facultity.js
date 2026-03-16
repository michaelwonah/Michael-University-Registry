const router = require('express').Router()

const { createFaculty, getFaculty } = require('../controller/facultyController')

router.post('/faculty', createFaculty);
router.get('/faculty', getFaculty);

module.exports = router