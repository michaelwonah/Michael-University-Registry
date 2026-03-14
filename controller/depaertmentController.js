const {departmentTable} = require ('../models');
const {facultyTable} = require('../models');


exports.createDepartment = async (req,res) => {
    try {
        const { facultyId } = req.params;
        const { departmentName, hod } = req.body
        const splitDm = departmentName.split(" ");
        const formatDm = `${splitDm[0].charAt(0).toUpperCase()}${splitDm[2].charAt(0).toUpperCase()}${splitDm[3].charAt(0).toUpperCase()}`
        console.log(formatDm)
        const date = new Date()

        const facultyCode = await facultyTable.findByPk(facultyId)
        console.log(facultyCode.facultyCode)
        const newAbbv = facultyCode.facultyCode
        console.log( `${newAbbv}-${formatDm}`);
        

        const newDepartment = await departmentTable.create({
            departmentName,
            hod,
            departmentCode: `${formatDm}-${facultyCode}`,
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
