const {facultyTable} = require('../models');

exports.createFaculty = async (req, res) => {
    try {
        const {facultyName, dean} = req.body
        const splitFm = facultyName.split(" ");
        const formatFm = `${splitFm[0].charAt(0).toUpperCase()}${splitFm[2].charAt(0).toUpperCase()}${splitFm[3].charAt(0).toUpperCase()}`
        console.log(formatFm)
        const date = new Date()

        const newFaculty = await facultyTable.create({
            facultyName,
            dean,
            facultyCode: formatFm,
            dateCreated: date
        });
        res.status(201).json({ 
            message: 'faculty created successfully',
            data: newFaculty
        })
    } catch (error) {
        console.log(error.message),
        res.status(500).json({
            message: `Something went wrong`
        })
        
    }
}