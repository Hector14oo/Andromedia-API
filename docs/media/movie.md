# Search Media

**Method** : `GET`

**URL** : `https://galaxy-media.2.us-1.fl0.io/api/media/movie/movieId`

**Auth required** : `False`

**Lang Support**: `True` 

**Parameters** : 
* `movieId`: You need to provide a valid ID belonging to a movie in order to receive its details..

<br />

## Response

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

<br />

## Schemas

### Movie Details:
```json
{
  id: number,
  title: string,
  adult: boolean,
  genres: Genre[],
  duration: string,
  tagline: string,
  overview: string,
  reviews: Review[],
  images: Image[],
  videos: Videos[],
  date: string,
  votes: number,
  collection: Collection{},
  credits: Credits{}
}
```
<br />

### Genre:
```json
  Action | Adventure | Animation | Comedy | Crime | Documentary | Drama | Family | Fantasy | History | Horror | Music | Mystery | Romance | Science Fiction | TV Movie | Thriller | War | Western
```
<br />

### Review:
```json
{
  "id": string,
  "author": string,
  "content": string,
  "created": string,
  "updated": string,
  "link": string
}
```
<br />

### Image:
```json
{
  "posters": [
    {
      "width": number,
      "height": number,
      "light": string,
      "original": string
    },
    ...
  ],
  "backdrops": [
    {
      "width": number,
      "height": number,
      "light": string,
      "original": string
    },
    ...
  ]
},
```
<br />

### Video:
```json
{
  "id": string,
  "link": string (Youtube Link),
  "name": string,
  "type": "teaser" | "trailer"
},
```
<br />

### Collection:
```json
{
  "id": number,
  "name": string,
  "poster": {
    "light": string,
    "original": string
  },
  "backdrop": {
    "light": string,
    "original": string
  }
},
```
<br />

### Credits:
```json
{
  "cast": [
    {
      "character": string,
      "adult": boolean,
      "id": number,
      "name": string,
      "image": {
        "light": string,
        "original": string
      },
      "url": string
    }
  ],
  "crew": [
    {
      "department": string,
      "job": string,
      "adult": boolean,
      "id": number,
      "name": string,
      "image": {
        "light": string,
        "original": string
      },
      "url": string
    }
  ]
}
```
<br />
