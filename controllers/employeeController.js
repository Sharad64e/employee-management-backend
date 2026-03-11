const Employee = require("../models/Employee");

exports.createEmployee = async (req,res)=>{
    try{
        const employee = new Employee(req.body);
        const saved = await employee.save();
        res.status(201).json(saved);
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
};

exports.getEmployees = async (req,res)=>{
    try{
        const employees = await Employee.find();
        res.status(200).json(employees);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
};

exports.getEmployeeById = async (req,res)=>{
    try{
        const emp = await Employee.findById(req.params.id);

        if(!emp)
            return res.status(404).json({message:"Employee not found"});

        res.json(emp);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
};

exports.updateEmployee = async (req,res)=>{
    try{
        const updated = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

        res.json(updated);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
};

exports.deleteEmployee = async (req,res)=>{
    try{
        await Employee.findByIdAndDelete(req.params.id);
        res.json({message:"Employee deleted"});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
};

exports.searchEmployee = async (req,res)=>{
    try{
        const name = req.query.name;

        const employees = await Employee.find({
            fullName: {$regex:name, $options:"i"}
        });

        res.json(employees);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
};