import request from 'superagent'

export function getTraps (cb) {
    request
        .get('/api/traps')
        .end((err, res) => {
            if (err) {
                cb(err)
            } else {
                cb(null, res.body.traps)
            }
        })
}

export function postTrap (trap, callback) {
    request
        .post('/api/traps')
        .send(trap)
        .end((err, res) => callback(res.body))
}
