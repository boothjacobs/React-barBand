const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const { Album, Song, Collection, Comment, Artist, User } = require("../../db/models");
const { requireAuth } = require('../../utils/auth');

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

//get comments for album
router.get("/:id/comments", asyncHandler(async (req, res) => {
    const comments = await Comment.findAll({
        where: { albumId: req.params.id },
        include: User
    })
}));

//add a comment for this album
router.post("/:id/comments", requireAuth, asyncHandler(async (req, res) => {
    const { commentBody } = req.body;
    const userId = req.user.id;
    const albumId = req.params.id;

    const comment = await Comment.build({ commentBody, userId, albumId });
    if (comment) {
        await comment.save();
    } else {
        console.log("**************** NO *****************")
    }

}) );

module.exports = router;
