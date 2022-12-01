const debug = require('debug')('eventController');

function eventController() {
    async function post(req, res) {
        debug('post');
        debug('req', req);
        res.json({ message: 'asdfsfd' });
    }

    return {
        post: post
    };
}

module.exports = eventController;
