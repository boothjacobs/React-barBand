const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const { Album } = require("../../db/models");

//route for /api/albums
router.get("", asyncHandler(async (req, res) => {
    const albums = await Album.findAll();
    return res.json(albums);
    // console.log("inside API GET call")
}));

//route for individual album page
router.get("/:id", asyncHandler(async (req, res) => {
    console.log("INSIDE API")
    const album = await Album.findByPk(req.params.id, {
        // include: [Comment, Song]
    });
    if (album) {
        return res.json(album);
    } else {
        console.log("find failed")
    }
}))

module.exports = router;