const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EmployeSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number
    }
})
//model
// mongoose.model('employee',EmployeeSchema)
// module.exports = EmployeeSchema

module.exports = mongoose.model('employee',EmployeSchema)