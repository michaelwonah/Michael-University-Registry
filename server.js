const express = require("express");

const app= express();
const facultyRouter = require('./router/facultity')
const deptRouter = require('./router/department')


app.use(express.json())
app.use(facultyRouter)
app.use(deptRouter)



const PORT = 3002;

app.listen(PORT, () =>{
    console.log(`server is listening to PORT:${PORT}`)
})