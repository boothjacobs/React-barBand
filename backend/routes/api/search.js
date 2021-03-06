const express = require('express');
const asyncHandler = require('express-async-handler');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Album, Song, Artist } = require('../../db/models');

const router = express.Router();


router.post('/', asyncHandler(async (req, res, next) => {
    const { searchTerm, searchBy } = req.body;

    let recording;

    if (searchBy === "album" && searchTerm) {
        recording = await Album.findAll({
            include: { model: Song, include: Artist },
            where: { title: { [Op.iLike]: '%' + searchTerm + '%' } }
        })
    } else if (searchBy === "album" && !searchTerm) {
        recording = await Album.findAll({
            include: { model: Song, include: Artist }
        })
    } else if (searchBy === "song" && searchTerm) {
        recording = await Song.findAll({
            include: {model: Artist},
            where: { title: { [Op.iLike]: '%' + searchTerm + '%' } }
        })
    } else if (searchBy === "song" && !searchTerm) {
        recording = await Song.findAll({
            include: [{ model: Album }, {model: Artist}]
        })
    } else if (searchBy === "original-artist" && searchTerm) {
        recording = await Song.findAll({
            include: [{ model: Album }, {model: Artist}],
            where: { originalArtist: { [Op.iLike]: '%' + searchTerm + '%' } }
        })
    } else if (searchBy === "original-artist" && !searchTerm) {
        recording = await Song.findAll({
            include: [{ model: Album }, {model: Artist}],
            where: { originalArtist: { [Op.iLike]: '%' + searchTerm + '%' } }
        })
    } else if (searchBy === "artist" && searchTerm) {
        recording = await Artist.findAll({
            include: { model: Song, include: Album },
            where: { name: { [Op.iLike]: '%' + searchTerm + '%' } }
        })
    } else if (searchBy === "artist" && !searchTerm) {
        recording = await Artist.findAll({
            include: Song
        })
    }

    return res.json(recording);

}));


module.exports = router;
