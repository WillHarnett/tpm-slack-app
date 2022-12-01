const debug = require('debug')('commandController');

function commandController() {
    async function get(req, res) {
        debug('get');
        res.json({ message: 'asdfsfd' });
    }

    return {
        get: get
    };
}

module.exports = commandController;
