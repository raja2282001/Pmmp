const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())

const userRoutes = require('./routes/UserRoutes')
const employeeRoutes = require('./routes/EmployeeRoutes')
//we have to use userRoutes in app.js
app.use('/user',userRoutes)
app.use('/employee',employeeRoutes)

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://mongo:3NzTnBVnvx999zA941RZ@containers-us-west-180.railway.app:5657",{},(err)=>{
    if(err){
        console.log("error in db connections....")
    }
    else{
        console.log("db connected....")
    }
})

const PORT =  process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
