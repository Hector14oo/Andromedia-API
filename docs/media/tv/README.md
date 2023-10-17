# TvShow Details

**Method** : `GET`

**URL** : `https://galaxy-media.2.us-1.fl0.io/api/media/tv/{tvShowId}`

**Auth required** : `False`

**Lang Support**: `True` 

**Parameters** : 
* `tvShowId`: You need to provide a valid ID belonging to a tvShow in order to receive its details.

<br />

> ### In the "seasons" property, the "url" property points to this endpoint: [Tv Season Details](./season/README.md)
<br />

## Example of a Successful Response

**Schema** : [`TvShowDetailsSchema`](./schema.md) <br />
**Code** : `200 OK` <br />
**Parameters** : 
* `tvShowId` = 1396 

```json
{
  "id": 1396,
  "title": "Breaking Bad",
  "adult": false,
  "genres": [
    "Drama",
    "Crime"
  ],
  "tagline": "Change the equation.",
  "overview": "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
  "reviews": [
    {
      "id": "5accdbe6c3a3687e2702d058",
      "author": "slyone10001",
      "content": "Wow....where to start. Not really into "DRUG" inspired shows. But this one had me from the start. The only bad about this show was the split seasons when it was a first run show. But now you can go right through to the next episode with out having to wait.....MUST WATCH ! !",
      "created": "2018-04-10T15:44:38.134Z",
      "updated": "2021-06-23T15:58:07.601Z",
      "link": "https://www.themoviedb.org/review/5accdbe6c3a3687e2702d058"
    },
    ...
  ],
  "seasons": [
    {
      "id": 3577,
      "title": "Specials",
      "number": 0,
      "episodesCount": 11,
      "poster": {
        "light": "https://image.tmdb.org/t/p/w500/40dT79mDEZwXkQiZNBgSaydQFDP.jpg",
        "original": "https://image.tmdb.org/t/p/original/40dT79mDEZwXkQiZNBgSaydQFDP.jpg"
      },
      "url": "https://galaxy-media.2.us-1.fl0.io/api/media/tv/1396/season/0?lang=en-US"
    },
    ...
  ],
  "images": {
    "posters": [
      {
        "width": 1000,
        "height": 1500,
        "light": "https://image.tmdb.org/t/p/w500/zla1t6G3mUIBG0b2tPqMY0MvM6T.jpg",
        "original": "https://image.tmdb.org/t/p/original/zla1t6G3mUIBG0b2tPqMY0MvM6T.jpg"
      },
      ...
    ],
    "backdrops": [
      {
        "width": 1920,
        "height": 1080,
        "light": "https://image.tmdb.org/t/p/w500/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg",
        "original": "https://image.tmdb.org/t/p/original/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg"
      },
      ...
    ]
  },
  "videos": [
    {
      "id": "64c3fca091745b010120964b",
      "link": "https://www.youtube.com/watch?v=VFLkMDEO-Xc",
      "name": "Breaking Bad | Trailer",
      "type": "Trailer"
    },
    ...
  ],
  "year": "2008-01-20",
  "status": "Ended",
  "votes": 8.9,
  "credits": {
    "cast": [
      {
      "character": "Walter White",
      "adult": false,
      "id": 17419,
      "name": "Bryan Cranston",
      "image":  {
        "light": "https://image.tmdb.org/t/p/w185/aGSvZg7uITJveQtGHDcPNI6map1.jpg",
        "original": "https://image.tmdb.org/t/p/original/aGSvZg7uITJveQtGHDcPNI6map1.jpg"
      },
      "url": "https://galaxy-media.2.us-1.fl0.io/api/media/person/17419?lang=en-US"
      },
      ...
    ],
    "crew": [
      {
      "department": "Production",
      "job": "Co-Executive Producer",
      "adult": false,
      "id": 24951,
      "name": "Peter Gould",
      "image": {
        "light": "https://image.tmdb.org/t/p/w185/a2dJSpUiXQ2NAxqSzztr6WsnhOJ.jpg",
        "original": "https://image.tmdb.org/t/p/original/a2dJSpUiXQ2NAxqSzztr6WsnhOJ.jpg"
      },
      "url": "https://galaxy-media.2.us-1.fl0.io/api/media/person/24951?lang=en-US"
      },
      ...
    ]
  },
},
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