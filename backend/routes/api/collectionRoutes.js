const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');
const { Album, User, Collection } = require('../../db/models');

const router = express.Router();

//GET COLLECTION IS IN USER ROUTER

//count collections
router.post("/count", asyncHandler(async(req, res) => {
    const {albumId} = req.body; 
    const otherCollections = await Collection.count({
        where: {
            'albumId': albumId,
        }
    });
    const count = {albumId: albumId, count: otherCollections}

    return res.json(count);
}));

//requireAuth
router.post("/", requireAuth, asyncHandler(async (req, res) => {
    const {userId, albumId} = req.body;

    let newCollect = await Collection.create({ userId, albumId });
    return res.json(newCollect);
}));

router.delete("/", requireAuth, asyncHandler(async (req, res) => {
    const { collectionRelationship } = req.body;

    let deletedCollection = await Collection.findAll({
        where: {
            "albumId": collectionRelationship.albumId,
            "userId": collectionRelationship.userId
        }
    });



    deletedCollection.forEach(async (record) => {
        await record.destroy();
    });

    return res.json(collectionRelationship);
}));


  module.exports = router;
