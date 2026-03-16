const {departmentTable} = require ('../models');
const {facultyTable} = require('../models');
const { formatInput } = require('./facultyController');

exports.createDepartment = async (req,res) => {
    try {
        const { facultyId } = req.params;
        console.log(facultyId)
        const { departmentName, hod } = req.body
        console.log(departmentName, hod)

        const formatDm = await formatInput(departmentName)
        console.log(formatDm)
        const date = new Date()
        console.log(date)

        const facultyCode = await facultyTable.findByPk(facultyId)
        // console.log(facultyCode)

        if (!facultyCode) {
            console.log(`faculty with id not found`)
            return res.status(404).json({
                message: `faculty with id not found`
            })
        }

        const newAbbv = facultyCode.facultyCode
        console.log( `${newAbbv}-${formatDm}`);
        

        const newDepartment = await departmentTable.create({
            departmentName,
            hod,
            departmentCode: `${newAbbv}-${formatDm}`,
            dateCreated: date,
            facultyId
        });
        res.status(201).json({ 
            message: 'department created successfully',
            data: newDepartment
        })

    } catch (error) {
        console.log(error.message),
        res.status(500).json({
            message: `something went wrong`
        })
    } 
}

exports.getDepartments = async (req, res) => {
    try {
        const departmentList = await departmentTable.findAll()

        res.status(200).json({
            message: `Department list fetched successfully`,
            data: departmentList
        })  
    } catch (error) {
        console.log(error.message),
        res.status(500).json({
            message: `Something went wrong`
        })
    }
}
