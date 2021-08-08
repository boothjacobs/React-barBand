# BarBand

[BarBand](https://bar-band.herokuapp.com/) is a Bandcamp clone for cover songs.

Users can search of browse the database from the navigation bar; a dropdown menu allows the user to submit an empty search string, which will return every entry in that category for browsing.

```javascript
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
```

![Search Results](https://github.com/boothjacobs/React-barBand/blob/main/frontend/src/images/search-screenshot.png?raw=true)

A BarBand user has a "collection" of saved albums. Collections can be added (from the album page) and deleted (from the collection page), and each album in a collection displays how many other collections it belongs to.

```javascript
//GET COLLECTIONS FOR USER
router.get("/:id", asyncHandler(async (req, res) => {
  const collections = await Collection.findAll({
    where: {
      'userId': req.params.id
    },
    include: [
      {model: Album},
      {model: User}
    ]
  });
  res.json(collections);
}));
```

![Collection count](https://github.com/boothjacobs/React-barBand/blob/main/frontend/src/images/collectionCount-screenshot.png?raw=true)

On the user's collection page, their own collection is rendered by mapping over the state, and each item in that collection also renders an additional React component which dispatches a countCollections thunk to make a separate database call for the collection data of all users.

```javascript
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
```

![Collection Redux Log](https://github.com/boothjacobs/React-barBand/blob/main/frontend/src/images/countCollection-redux-log.png?raw=true)

Clicking on an album from the collection, home page, or search results brings the user to an album page, which lists the tracks and their original artists, and features an audio player.

The "ownThis" function is used to render the "You own this" icon when applicable.
```javascript
const ownThis = collection.find(collect => collect.albumId === +id );
```

![audio player](https://github.com/boothjacobs/React-barBand/blob/main/frontend/src/images/audioplayer-screenshot.png?raw=true)

The album page also offers commenting for logged in users with full CRUD.


(Future updates will include original recording artists as a database model and the ability to "follow" artists to show them on the home page on login)
