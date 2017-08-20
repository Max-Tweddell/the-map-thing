const knex = require('knex')
const config = require('../knexfile').development

const conn = knex(config)

function getTraps () {
    return conn('traps')
        .select()
}


function addTrap (trap) {
    let newTrap = trap
    newTrap.trapcount = 0
    if (newTrap.type === null) {
        newTrap.type = 'trap'
    }

    return conn('traps')
        .insert(newTrap)
}
module.exports = {
    getTraps,
    addTrap
}
