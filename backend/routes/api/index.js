const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const albumRouter = require('./albums.js');
const collectionRouter = require('./collectionRoutes.js');
const searchRouter = require('./search');


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/albums', albumRouter);
router.use('/collection', collectionRouter);
router.use('/search', searchRouter);




module.exports = router;
