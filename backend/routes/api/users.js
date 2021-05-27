const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Album, User, Collection } = require('../../db/models');

const router = express.Router();

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
  ];

router.post('/', validateSignup, asyncHandler(async (req, res) => {
      const { username, email, location, bio, password } = req.body;
      const user = await User.signup({ username, email, location, bio, password });

      await setTokenCookie(res, user);

      return res.json({
        user,
      });
    }),
);

//GET COLLECTIONS FOR USER
router.get("/:id", asyncHandler(async (req, res) => {
  const collections = await Collection.findAll({
    where: {
      'userId': req.params.id
    },
    include: [
      {model: Album},
      {model: User}
    ]
  });
  res.json(collections);
}));

module.exports = router;
