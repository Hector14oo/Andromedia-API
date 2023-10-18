# Delete Rate

**Method** : `DELETE`

**URL** : 
* `https://galaxy-media.2.us-1.fl0.io/api/rate/movie/{movieId}`
* `https://galaxy-media.2.us-1.fl0.io/api/rate/tv/{tvShowId}`

**Auth required** : `True`

**Lang Support**: `False`

**Parameters** : 
* `movieId`: You need to provide a valid ID belonging to a Movie.
* `tvShowId`: You need to provide a valid ID belonging to a tvShow.

<br />

## Example of a Successfull Response

**Code** : `200 OK`

```json
{
  "success": true,
  "message": "The item/record was deleted successfully."
}
```

