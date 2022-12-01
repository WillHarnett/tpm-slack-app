const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const debug = require('debug')('app');

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => debug(`listening on ${PORT}`));
app.disable('x-powered-by');

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    express.json({
        limit: '50mb',
        verify: (buf, encoding) => {
            debug(res);
            debug(encoding);
            req.rawBody = buf.toString();
        }
    })(req, res, (error) => {
        if (error) {
            res.sendStatus(400).json({ error: 'Bad body Request' });
            return;
        }
        next();
    });
});

module.exports = app;

// Routers
const commandRouter = require('./routes/commandRouter')();
const eventRouter = require('./routes/eventRouter')();

app.use('/command', commandRouter);
app.use('/event', eventRouter);
