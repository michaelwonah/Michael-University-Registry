const { studentTable, departmentTable } = require('../models')

exports.createStudent = async (req, res) => {
    try {
        const { departmentId } = req.params;
        const { studentName, age, gender } = req.body;

        const fetchDept = await departmentTable.findByPk(departmentId)

        if (!fetchDept) {
            return res.status(404).json({
                message: `Department with this Id doesnt exists`
            })
        }

        const deptCode = fetchDept.departmentCode

        const scanTable = await studentTable.findAll()
        const tableLength = scanTable.length

        const scanTableById = await studentTable.findAll({
            where:{
                departmentId: departmentId
            }
        })
        const tableByIdLength = scanTableById.length

        let count = 0
        if (tableLength === 0) {
            count = String(count + 1).padStart(3, 0)
        } else {
            count = String(tableLength + 1).padStart(3, 0)
        }
        console.log(count);
        

        let idCount = 0
        if (tableByIdLength === 0) {
            idCount = String(idCount + 1).padStart(3, 0)    
        } else {
            idCount = String(tableByIdLength + 1).padStart(3, 0)
        }
        console.log(idCount);
        

        const dateJoined = new Date()
        const year = dateJoined.getFullYear()
        
        const matricNumber = `${deptCode}-${idCount}-${count}${year}`
        console.log(matricNumber);

        const newStudentInfo = {
            studentName,
            matricNumber,
            age,
            gender,
            departmentId,
            dateJoined
        }

        const newStudent = await studentTable.create(newStudentInfo)

        res.status(200).json({
            message: `Student has been Sucessfully created!`,
            data: newStudent
        })

    } catch (error) {
        console.log(error.message),
        res.status(500).json({
            message: `Cannot create student, Something went wrong`
        })
    }
}