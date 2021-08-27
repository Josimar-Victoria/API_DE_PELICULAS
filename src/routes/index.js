const { Router } = require('express')
const router = Router()

// routes

router.get('/', (req, res) => {
    //res.json({"Title": "Hola mundo" })
    const data = {
        "name": "Harry",
        "apellido": "Vitoria"
    }
    res.json(data)
})

module.exports = router