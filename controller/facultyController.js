const {facultyTable} = require('../models');

exports.formatInput = async (input) => {
    if (input) {
        const splitInput = input.split(" ");

        if (splitInput.length === 4){
            let formattedInput =  `${splitInput[0].charAt(0).toUpperCase()}${splitInput[1].charAt(0).toUpperCase()}${splitInput[2].charAt(0).toUpperCase()}${splitInput[3].charAt(0).toUpperCase()}`;
            return formattedInput
        } else if (splitInput.length === 3) {
            let formattedInput =  `${splitInput[0].charAt(0).toUpperCase()}${splitInput[1].charAt(0).toUpperCase()}${splitInput[2].charAt(0).toUpperCase()}`;
            return formattedInput
        }
        return output;
    }

    return output;
       
}


exports.createFaculty = async (req, res) => {
    try {
        const {facultyName, dean} = req.body
        const formatFm = await this.formatInput(facultyName)
        console.log(`format `, formatFm)
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
            message: error.message
        })
        
    }
}

exports.getFaculty = async(req, res) => {
    try {
        const facultyList = await facultyTable.findAll()

        res.status(200).json({
            message:`Faculty list fetched succesfully`,
            data: facultyList
        })
    } catch (error) {
        console.log(error.message),
        res.status(500).json({
            message: `Something went wrong`
        })
    }
}

