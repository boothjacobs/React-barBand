const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const { Album, Song, Collection, Comment, Artist, User } = require("../../db/models");

//route for /api/albums
router.get("", asyncHandler(async (req, res) => {
    const albums = await Album.findAll({
        include: {
            model: 'Songs',
            include: ['Artists']
    }
});
    return res.json(albums);
}));

//route for individual album page
router.get("/:id", asyncHandler(async (req, res) => {
    const album = await Album.findByPk(req.params.id, {
        include: 'Song'
    });
    // console.log("***********", album)
    if (album) {
        return res.json(album);
    }
}))

module.exports = router;
