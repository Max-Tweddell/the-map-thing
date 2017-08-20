




exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('traps').del()
        .then(function () {
            // Inserts seed entries
            return knex('traps').insert([
                {type: 'stoat trap', latitude: -255.255, longitude: 192.168, description: 'next to a tree', trapcount: 3 },
                {type: 'stoat trap', latitude: -195.255, longitude: 192.168, description: 'next to a hill', trapcount: 8 }
            ])
        })
}
