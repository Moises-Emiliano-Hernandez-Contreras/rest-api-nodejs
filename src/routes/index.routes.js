import { Router } from "express";
import { getEmpleados,crearEmpleados,
borrarEmpleados,actualizarEmpleados,getEmpleadoById } from "../controllers/employes.controllers.js";
const rutas=Router()

rutas.get("/",getEmpleados)
rutas.get("/:id",getEmpleadoById)
rutas.post("/",crearEmpleados)
rutas.delete("/:id",borrarEmpleados)
rutas.patch("/:id",actualizarEmpleados)
export default rutas