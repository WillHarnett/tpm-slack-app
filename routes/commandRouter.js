const express = require('express');
const debug = require('debug')('commandRouter');
const { commandController } = require('../controllers');

function routes() {
    debug('router');
    const router = express.Router();

    router.route('/')
        .get(commandController().get);

    return router;
}

module.exports = routes;
