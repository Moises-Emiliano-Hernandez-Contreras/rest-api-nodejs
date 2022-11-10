import express from 'express'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

app.use('/api',indexRoutes)
app.use((req,res,next)=>{
      res.status(404).json({
            message:"Ruta no existente"
      })
})
export default app