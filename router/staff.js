const router = require('express').Router()

const { createStaff, getAllStaff, updateStaff, deleteStaff } =  require('../controller/staffController')

router.post('/staff/:facultyId', createStaff)
router.get('/staffs', getAllStaff)
router.patch('/staff/:staffId', updateStaff)
router.delete('/staff/:staffId', deleteStaff)

module.exports = router