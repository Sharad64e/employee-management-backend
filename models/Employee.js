const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phoneNumber: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    designation: {
        type: String,
        required: true
    },

    salary: {
        type: Number,
        required: true,
        min: 0
    },

    dateOfJoining: {
        type: Date,
        required: true
    },

    employmentType: {
        type: String,
        enum: ["Full-time","Part-time","Contract"]
    },

    status: {
        type: String,
        enum: ["Active","Inactive"],
        default: "Active"
    }

},{timestamps:true});

module.exports = mongoose.model("Employee", employeeSchema);