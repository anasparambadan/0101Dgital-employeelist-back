import express from 'express'
import { addEmployee, getEmployeesList } from '../controller/adminController.js'

const router = express.Router()

router.post('/add',addEmployee)
router.get('/employee-list',getEmployeesList)



export default router