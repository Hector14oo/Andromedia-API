# Movie Details

**Method** : `GET`

**URL** : `https://galaxy-media.2.us-1.fl0.io/api/media/movie/{movieId}`

**Auth required** : `False`

**Lang Support**: `True` 

**Parameters** : 
* `movieId`: You need to provide a valid ID belonging to a movie in order to receive its details..

<br />

## Example of a Successfull Response

**Schema** : [`MovieDetailsSchema`](./schema.md#MovieDetailsSchema) <br />
**Code** : `200 OK` <br />
**Parameters** : 
* `movieId` = 111

```json
{
  "id": 111,
  "title": "Scarface",
  "adult": false,
  "genres": [
    "Action",
    "Crime",
    "Drama"
  ],
  "duration": "2h 49m",
  "tagline": "The world is yours...",
  "overview": "After getting a green card in exchange for assassinating a Cuban government official, Tony Montana stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in the state, controlling nearly all the cocaine that comes through Miami. But increased pressure from the police, wars with Colombian drug cartels and his own drug-fueled paranoia serve to fuel the flames of his eventual downfall.",
  "reviews": [
    {
      "id": "5db0d60bcb30840013aba0d4",
      "author": "JPV852",
      "content": "Immensely great crime-drama that features some great performances and excellent writing from Oliver Stone (and this coming from someone who isn't a big fan of his) to the direction by Brian De Palma. The score is great though still love the song "Take It to the Limit" during the money laundering scene. Still a few slots below the likes of The Godfather and Heat, yet still a amazing film that holds up so well. **4.5/5**",
      "created": "2019-10-23T22:36:59.798Z",
      "updated": "2021-06-23T15:58:28.244Z",
      "link": "https://www.themoviedb.org/review/5db0d60bcb30840013aba0d4"
    },
    ...
  ],
  "images": {
    "posters": [
      {
      "width": 2000,
      "height": 3000,
      "light": "https://image.tmdb.org/t/p/w500/a1Y7gDd6Ks49dv1kRBGdzESZzFU.jpg",
      "original": "https://image.tmdb.org/t/p/original/a1Y7gDd6Ks49dv1kRBGdzESZzFU.jpg"
      },
      ...
    ],
    "backdrops": [
      {
      "width": 3840,
      "height": 2157,
      "light": "https://image.tmdb.org/t/p/w500/cCvp5Sni75agCtyJkNOMapORUQV.jpg",
      "original": "https://image.tmdb.org/t/p/original/cCvp5Sni75agCtyJkNOMapORUQV.jpg"
      },
      ...
    ]
  },
  "videos": [
    {
      "id": "5bcd7956925141613401b268",
      "link": "https://www.youtube.com/watch?v=7pQQHnqBa2E",
      "name": "Scarface Trailer HD (1983)",
      "type": "Trailer"
    },
    ...
  ],
  "date": "1983-12-09",
  "votes": 8.166,
  "collection": null,
  "credits": {
    "cast": [
      {
        "character": "Tony Montana",
        "adult": false,
        "id": 1158,
        "name": "Al Pacino",
        "image": {
          "light": "https://image.tmdb.org/t/p/w185/2dGBb1fOcNdZjtQToVPFxXjm4ke.jpg",
          "original": "https://image.tmdb.org/t/p/original/2dGBb1fOcNdZjtQToVPFxXjm4ke.jpg"
        },
        "url": "https://galaxy-media.2.us-1.fl0.io/api/media/person/1158?lang=en-US"
      },
      ...
    ],
    "crew": [
      {
        "department": "Editing",
        "job": "Editor",
        "adult": false,
        "id": 852,
        "name": "Gerald B. Greenberg",
        "image": null,
        "url": "https://galaxy-media.2.us-1.fl0.io/api/media/person/852?lang=en-US"
      },
      ...
    ]
  }
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
