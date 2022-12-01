const express = require('express');
const debug = require('debug')('eventRouter');
const { eventController } = require('../controllers');

function routes() {
    debug('router');
    const router = express.Router();

    router.route('/')
        .post(eventController().post);

    return router;
}

module.exports = routes;
