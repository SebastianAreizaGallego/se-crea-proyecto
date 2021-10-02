const {Router}=require('express')



const rutas=Router()

rutas.get('/avanzada/v1/jugadores', function (req, res) {
    res.send('peticion de tipo GET (BUSCAR TODOS LOS JUGADORES)')
    })
rutas.get('/avanzada/v1/jugadores', function (req, res) {
        res.send('peticion de tipo GET (BUSCAR UN JUGADOR)')
        })

    
rutas.post('/avanzada/v1/jugadores', function (req, res) {
            res.send('peticion de tipo post (INSERTAR JUGADORES)')
        })

rutas.put('/avanzada/v1/jugadores/id', function (req, res) {
            res.send('peticion de tipo put (EDITAR JUGADORES)')
        })

rutas.delete('/avanzada/v1/jugadores/id', function (req, res) {
            res.send('peticion de tipo delete (ELIMINAR JUGADORES)')
        })


        module.exports=rutas