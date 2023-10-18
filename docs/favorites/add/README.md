# Add Favorite

**Method** : `POST`

**URL** : `https://galaxy-media.2.us-1.fl0.io/api/favorites`

**Auth required** : `True`

**Lang Support**: `False` 

**Body Parameters** :

> [Here](./schema.md#FavoriteSchema) is the Schema

```json
Content-Type: application/json

{
  "movieId",
  "title",
  "overview",
  "poster",
  "url",
}

```

<br />

## Example of a Successfull Response

**Code** : `201 CREATED` <br />

```json
{
  "id": "65282dff615afdd75addbb68",
  "movieId": 111,
  "title": "Dragon Ball Z",
  "overview": "",
  "poster": {
    "light": "https://image.tmdb.org/t/p/w500/gAr6iyIRM6kqto17fAELtf9ONdw.jpg",
    "original": "https://image.tmdb.org/t/p/original/gAr6iyIRM6kqto17fAELtf9ONdw.jpg"
  },
  "url": "https://galaxy-media.2.us-1.fl0.io/api/media/tv/12971?lang=en-US",
  "userId": "65281cec0c5fd2b3c63e1fa5"
}
```


## Example of a Failed Response

**Code** : `409 CONFLICT` <br />

```json
{
  "succces": false,
  "message": "Favorite already exists"
}
```