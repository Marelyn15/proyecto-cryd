//Exportar modulo express
const express = require('express'); 
//exportar el cors
const cors = require('cors')

//hacer la app nodejs
const app = express()
//puerto de la app
const port = 3000
//===================================================================

//Base de datos momentanea
let trasactionArr = []

//===================================================================
//mandando el request desde el frontend
app.use(
    express.urlencoded({
        extended: true
    })
)
//correrla
app.use(express.json({
    type: "*/*"
}))

//cors
app.use(cors())


//==========================================
//buscar datos
app.get('/transaction',(req, res)=>{
    //Imprimir en pantalla
    res.send(JSON.stringify(trasactionArr))
})
//ingresar datos
app.post('/transaction',(req,res) => {
    let userData = req.body
    //Entrandola en la db
    trasactionArr.push(userData)
    //Salida al front y devuelta
    res.send(JSON.stringify("Guardada"));
    console.log(trasactionArr); 
})

//La applicacion se ejecutara en el puerto
app.listen(port, ()=>{
    console.log(`Se esta ejecutando en http://localhost:${port}`)
})

