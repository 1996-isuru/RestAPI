// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// //create the schema
// const studentSchema = new Schema({
//     name : {
//         type : String,
//         //backend validation 
//         //name should have a valid data,
//         required: true 
//     },
//     age : {
//         type: Number,
//         required: true
//     },
//     gender : {
//         type: String,
//         required: true
//     }
// })

// //when we send data in to databse we give two parameters
// //first one is the document name of we stored data in mongo db database
// //this doing by the fuction called model in mongoose
// const Student = mongoose.model("Student",studentSchema);

// //commit

// module.exports = Student;