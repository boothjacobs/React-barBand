const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const { Album, Song, Collection, Comment, Artist, User } = require("../../db/models");

//route for /api/albums
router.get("", asyncHandler(async (req, res) => {
    const albums = await Album.findAll({
});
// console.log("++++++++++++++++++++++++++++++++")
    return res.json(albums);
}));

//route for individual album page
router.get("/:id", asyncHandler(async (req, res) => {
    const album = await Album.findByPk(req.params.id, {
        // include: Song
        include: {
            model: Song,
            include: Artist
        }
    });
    if (album) {
        console.log("***********", album)
        return res.json(album);
    }
}))

module.exports = router;
