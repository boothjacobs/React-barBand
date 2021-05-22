const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const { Album } = require("../../db/models");

//route for /api/albums
router.get("", asyncHandler(async (req, res) => {
    const albums = await Album.findAll();
    res.json(albums);
    // console.log("inside API GET call")
}))

module.exports = router;
