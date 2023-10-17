# Media Trending

**Method** : `GET`

**URL** : `https://galaxy-media.2.us-1.fl0.io/api/trending`

**Auth required** : `False`

**Lang Support**: `True` 

**Query Parameters** : 
* `timeWindow = (week | day)`: Is used to change the time window for the received trends, if this parameter is not provided, it will default to "week".

<br />

## Response

**Schema**: [TrendingSchema](./schema.md#TrendingSchema) <br />
**Code** : `200 OK` <br />

```json
{
  "page": 1,
  "results": [
    {
      "id": 575264,
      "title": "Mission: Impossible - Dead Reckoning Part One",
      "adult": false,
      "genres": [
        "Action",
        "Thriller"
      ],
      "overview": "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.",
      "poster": {
        "light": "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        "original": "https://image.tmdb.org/t/p/original/NNxYkU70HPurnNCSiCjYAmacwm.jpg"
      },
      "backdrop": {
        "light": "https://image.tmdb.org/t/p/w500/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
        "original": "https://image.tmdb.org/t/p/original/628Dep6AxEtDxjZoGP78TsOxYbK.jpg"
      },
      "year": "2023-07-08",
      "votes": 7.703,
      "type": "movie",
      "url": "https://galaxy-media.2.us-1.fl0.io/api/media/movie/575264?lang=en-US"
    },
    ...
  ],
  "totalResults": 1000,
  "totalPages": 20000
}
```
