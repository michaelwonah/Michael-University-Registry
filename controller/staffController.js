const { staffTable, facultyTable } = require('../models')

exports.createStaff = async (req, res) => {
    try {
        const {facultyId} = req.params;
        const { staffName, gender, qualification } = req.body;

        // find facultyCode by parsed id
        const checkFalCode = await facultyTable.findByPk(facultyId)
        const falCode = checkFalCode.facultyCode

        // fetch all from table and calc length
        const tableLength = await staffTable.findAll()
        const tbLength = tableLength.length

        // fetch all from table where facultyId is valid, and calc length
        const checkFalLength = await staffTable.findAll({
            where: {
                facultyId: facultyId
            }
        })  

        // calculate the length the table, if null, start with 001, else, add 1 to the length and pad with 0 to make it 3 digits
        let tbNum = 0
        if (tbLength == 0 ) {
            tbNum = String(tbNum+1).padStart(3, 0);            
        } else {
            tbNum = String(tbLength + 1).padStart(3, 0);
        }

        // calculate the length of the table where facultyId is valid, if null, start with 01, else, add 1 to the length and pad with 0 to make it 2 digits
        let num = 0
        if (checkFalLength.length == 0 ) {
            num = String(num+1).padStart(2, 0);            
        } else {
            num = String(checkFalLength.length + 1).padStart(2, 0);
        }

        const dateJoined = new Date()

        // generate staff code by concatenating faculty code, number of staff in the faculty, and total number of staff in the table
        const staffCode = `${falCode}-${num}-${tbNum}`
        console.log(staffCode)

        const newStaff = await staffTable.create({
            staffName,
            gender,
            qualification,
            facultyId,
            staffCode,
            dateJoined
        });

        res.status(201).json({
            message: 'Staff created successfully',
            data: newStaff
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            mesage: `Something went wrong`
        })
    }
}

exports.getAllStaff = async (req, res) => {
    try {
        const allStaff = await staffTable.findAll()

        res.status(200).json({
            message: `Fetched all Staffs successfully`,
            data: allStaff
        })
    } catch (error) {
        console.log(error.message),
        res.status(500).json({
            message: `Something went wrong`
        })
    }
}

exports.updateStaff = async (req, res) => {
    try {
        const { staffId } = req.params
        const { staffName, gender, qualification } = req.body
        // console.log(staffId)

        const findStaff = await staffTable.findByPk(staffId)
        // console.log(findStaff)

        if (!findStaff) {
            return res.status(404).json({
                message: `Staff with that Id doesnt exist`
            })
        }

        const updatedStaff = { 
                staffName: staffName || findStaff.staffName ,
                gender: gender || findStaff.gender ,
                qualification: qualification || findStaff.qualification  ,
                facultyId: findStaff.facultyId,
                staffCode: findStaff.staffCode,
                dateJoined: findStaff.dateJoined
        }

        const updates = await staffTable.update(updatedStaff, {
            where: {
                staffId: staffId
            }
        })


        res.status(200).json({
            message: `Staff Info Updated successfully`,
            data: updates
        })

    } catch (error) {
        console.log(error.message),
        res.status(500).json({
            message: `Something went wrong`
        })
    }
}

exports.deleteStaff = async (req, res) => {
    try {
        const { staffId } = req.params

        const findStaff = await staffTable.findByPk(staffId)

        if (!findStaff) {
            return res.status(404).json({
                message: `Staff with Id not found`
            })
        }

        await staffTable.destroy({
            where:{
                staffId: staffId
            }
        })

        res.status(200).json({
            message: `Staff Info deleted sucessfully`
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message:`Could not perform operation. Something went wrong`
        })
    }
}