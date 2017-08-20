const db = require('./db')
const express = require('express')
const router = express.Router()


router.get('/traps', (req, res) => {
    db.getTraps()
        .then( result => {
            const trapData = {traps: result}
            res.send(trapData)
        })
})

router.post('/traps', (req,res) => {
    db.addTrap(req.body)
        .then((result) => {
            db.addTrap(result)
            res.status(200).send()
        })
})


module.exports = router
