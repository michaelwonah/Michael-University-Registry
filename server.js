const express = require("express");

const app= express();
const facultyRouter = require('./router/facultity')
const deptRouter = require('./router/department')
const staffRouter = require('./router/staff')
const studentRouter = require('./router/student')

app.use(express.json())
app.use(facultyRouter)
app.use(deptRouter)
app.use(staffRouter)
app.use(studentRouter)

// formatInput(`hello, i'm weird`)

const PORT = 3002;

app.listen(PORT, () =>{
    console.log(`server is listening to PORT:${PORT}`)
})