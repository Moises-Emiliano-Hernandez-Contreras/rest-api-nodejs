import { pool } from "../db.js";

export const getEmpleados = async(req,res)=>{
      try {
            const [rows]=await pool.query("SELECT * FROM empleados")
            res.json(rows)            
      } catch (error) {
            return res.status(500).json({
                  message:"Ups!. Allgo salío mal"
            })
      }
}
export const getEmpleadoById = async(req,res)=>{  
      try {
            const [rows] = await pool.query("SELECT * FROM empleados WHERE id=?",req.params.id);
            if(rows.length<=0){
                  return res.status(404).json({
                        message:"Empleado no encontrado"
                  })
            }
            res.json(rows)            
      } catch (error) {
            return res.status(500).json({
                  message:"Ups!. Allgo salío mal"
            })            
      }    
}
export const crearEmpleados = async(req,res)=>{
      try {
            const {name,salary}=req.body
            const [rows]=await pool.query('INSERT INTO empleados (name, salary) VALUES (?,?)',[name,salary])      
            res.send({
                  id: rows.insertId,
                  name,
                  salary
            })            
      } catch (error) {
            return res.status(500).json({
                  message:"Ups!. Allgo salío mal"
            })
      }
}
export const borrarEmpleados = async(req,res)=>{      
      try {
            const result=await pool.query("DELETE FROM empleados WHERE id=?",req.params.id)
            if(result[0].affectedRows>=1){
                  const [rows]=await pool.query("SELECT * FROM empleados")
                  res.json(rows)
            }else{
                  res.status(404).json({
                        message:"Algo salio mal"
                  })
            }            
      } catch (error) {
            return res.status(500).json({
                  message:"Ups!. Allgo salío mal"
            })            
      }
}
export const actualizarEmpleados = async(req,res)=>{
      try {
            const id = req.params.id
            const {name,salary}=req.body
            const result = await pool.query("UPDATE empleados SET name=IFNULL(?,name),salary=IFNULL(?,salary) WHERE id=?",[name,salary,id])            
            if(result[0].affectedRows>=1){
                  const [rows]=await pool.query("SELECT * FROM empleados WHERE id=?",id)
                  res.json(rows)            
            }else{
                  res.status(404).json({
                        message:"Algo salio mal"
                  })            
            }            
      } catch (error) {
            return res.status(500).json({
                  message:"Ups!. Allgo salío mal"
            })            
      }
}