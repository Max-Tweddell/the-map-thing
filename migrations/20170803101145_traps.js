
exports.up = function (knex, Promise) {
    return knex.schema.createTable('traps', table => {
        table.increments()
        table.string('type')
        table.decimal('latitude')
        table.decimal('longitude')
        table.string('description')
        table.integer('trapcount')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('traps')
}
