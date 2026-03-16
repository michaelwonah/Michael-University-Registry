const router = require('express').Router()

const { createDepartment, getDepartments } = require('../controller/depaertmentController')

router.post('/department/:facultyId', createDepartment);
router.get('/department', getDepartments);

module.exports = router