import mongoose from "mongoose";
const employeeSchema = mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        positioin:{
            type:String,
            required:true
        },
        team:{
            type:String,
            required:true
        },
        office:{
            type:String,
            required:true
        },
        startDate:{
            type:String,
            required:true
        },
        salary:{
            type:String,
            required:true
        },
        approver:{
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true
        },
        phoneNumber:{
            type:String,
            required:true
        }

      
    },
    {timestamps:true}
)
const employeeModel = mongoose.model("employees",employeeSchema);
export default employeeModel;