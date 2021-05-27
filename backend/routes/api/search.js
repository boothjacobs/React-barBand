// const express = require('express');
// const asyncHandler = require('express-async-handler');

// const { setTokenCookie, restoreUser } = require('../../utils/auth');
// const { User, Album, Song, Artist } = require('../../db/models');

// const router = express.Router();


// router.post('/', asyncHandler(async (req, res, next) => {
//      const { searchBy } = req.body;
//     const questions = await Question.findAll({
//         include: [User],
//         where: {
//             content: {
//                 [Op.substring]: content,
//             }
//         }
//     });

//     res.render('home', {
//         questions
//     });
// }));


// module.exports = router;
