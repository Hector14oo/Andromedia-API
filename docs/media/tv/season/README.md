# TvSeason Details

**Method** : `GET`

**URL** : `https://galaxy-media.2.us-1.fl0.io/api/media/tv/{tvShowId}/season/{seasonNumber}`

**Auth required** : `False`

**Lang Support**: `True` 

**Parameters** : 
* `tvShowId`: You need to provide a valid ID belonging to a TV series in order to receive its details.
* `seasonNumber`: You need to provide a number that belongs to a TV series season in order to receive the details of that season.

<br />

## Example of a Successful Response

**Schema** : [`tvSeasonDetailsSchema`](./schema.md) <br />
**Code** : `200 OK` <br />
**Parameters** : 
* `tvShowId` = 84958
* `seasonNumber` = 1

```json
{
  "id": 114355,
  "title": "Season 1",
  "number": 1,
  "date": "2021-06-09",
  "overview": "Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of "Avengers: Endgame."",
  "episodes": [
    {
      "id": 2534997,
      "title": "Glorious Purpose",
      "number": 1,
      "date": "2021-06-09",
      "overview": "After stealing the Tesseract in "Avengers: Endgame," Loki lands before the Time Variance Authority.",
      "duration": "53m",
      "preview": {
        "light": "https://image.tmdb.org/t/p/w500/gxh0k3aADsYkt9tgkfm2kGn2qQj.jpg",
        "original": "https://image.tmdb.org/t/p/original/gxh0k3aADsYkt9tgkfm2kGn2qQj.jpg"
      },
      "votes": 7.196
    },
    ...
  ],
  "poster": {
  "light": "https://image.tmdb.org/t/p/w500/8uVqe9ThcuYVNdh4O0kuijIWMLL.jpg",
  "original": "https://image.tmdb.org/t/p/original/8uVqe9ThcuYVNdh4O0kuijIWMLL.jpg"
  },
  "votes": 7.8
}
```

<br />

## Example of a Failed Response 

**Code** : 404

```json
{
  "sucess": false,
  "message": "The resource you requested could not be found."
}
```
