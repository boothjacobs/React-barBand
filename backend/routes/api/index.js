const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const albumRouter = require('./albums.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/albums', albumRouter);




module.exports = router;
