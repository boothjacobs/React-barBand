const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');
const { Album, User, Collection } = require('../../db/models');

const router = express.Router();

//GET COLLECTION IS IN USER ROUTER

//count collections--ERROR BUG
router.post("/count", asyncHandler(async(req, res) => {
    const {albumId} = req.body; //how to pass this through GET call?
    const otherCollections = await Collection.count({
        where: {
            'albumId': albumId,
        }
    });

    return res.json(otherCollections);
}));

//requireAuth
router.post("/", requireAuth, asyncHandler(async (req, res) => {
    const {userId, albumId} = req.body;

    let newCollect = await Collection.create({ userId, albumId });
    return res.json(newCollect);
}));

router.delete("/", requireAuth, asyncHandler(async (req, res) => {
    const { collectionId } = req.body;

    let deletedCollection = await Collection.findByPk(collectionId);

    await deletedCollection.destroy();
    return res.json({collectionId});
}));


  module.exports = router;
