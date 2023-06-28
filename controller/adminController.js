import employeeModel from "../model/employeeModel.js";

export const addEmployee = async (req, res) => {
    const employees = req.body;
    try {
      const users = await employeeModel.insertMany(employees);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({message:error.message});
    }
  };

  export const getEmployeesList = async(req,res)=>{
    try {
      const employeesList = await employeeModel.find()
      res.status(200).json(employeesList)
      
    } catch (error) {
      console.log(error)
      res.status(500).json({message:error.message});
      
    }
  }