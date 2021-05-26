const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');
const { Album, User, Collection } = require('../../db/models');

const router = express.Router();

//GET COLLECTION IS IN USER ROUTER

//count collections
router.get("/count", asyncHandler(async(req, res) => {
    const {albumId} = req.body;
    const otherCollections = await Collection.count({
        where: {
            'albumId': albumId,
        }
    });
    console.log("from collection API", otherCollections);
    return res.json(otherCollections);
}));

router.post("", requireAuth, asyncHandler(async (req, res) => {

}));

router.delete("", requireAuth, asyncHandler(async (req, res) => {
    const userId = req.user.id; //???? LEGAL?
}))


  module.exports = router;
