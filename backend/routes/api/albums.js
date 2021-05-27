const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const { Album, Song, Collection, Comment, Artist, User } = require("../../db/models");
const { requireAuth } = require('../../utils/auth');

//route for /api/albums
router.get("", asyncHandler(async (req, res) => {
    const albums = await Album.findAll({});
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
    });
    return res.json(comments);
}));

//add a comment for this album
router.post("/:id/comments", requireAuth, asyncHandler(async (req, res) => {
    const { body } = req.body.comment;
    const userId = req.user.id;
    const albumId = req.params.id;

    const comment = await Comment.create({ body, userId, albumId });
    return res.json(comment);
}) );

//edit a comment
router.put("/:id/comments/:commId", requireAuth, asyncHandler(async (req, res) => {
    const commentId = req.params.commId;
    const { body } = req.body;

    const comment = await Comment.findByPk(commentId);
    comment.update({
        body: body
    });
    return res.json(comment);
}));

router.delete("/:id/comments/:commId", requireAuth, asyncHandler(async (req, res) => {
    const albumId = req.params.id;
    const commentId = req.params.commId;

    const comment = await Comment.findByPk(commentId);
    await comment.destroy();
    return res.json({success: "message deleted"});
}));

module.exports = router;
