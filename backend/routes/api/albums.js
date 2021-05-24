const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const { Album, Song, Collection, Comment, Artist, User } = require("../../db/models");

//route for /api/albums
router.get("", asyncHandler(async (req, res) => {
    const albums = await Album.findAll({
});
    return res.json(albums);
}));

//route for individual album page
router.get("/:id", asyncHandler(async (req, res) => {
    const album = await Album.findByPk(req.params.id, {
        include: [{
            model: Song,
            include: Artist
        },
        {
            model: Comment,
            include: User
        }]
    });
    if (album) {
        return res.json(album);
    }
}));

router.get("/:id/comments", asyncHandler(async (req, res) => {
    const comments = await Comment.findAll({
        where: { albumId: req.params.id },
        include: User
    })
}))

module.exports = router;
