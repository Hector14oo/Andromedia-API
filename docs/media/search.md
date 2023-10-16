# Search Media

**Method** : `GET`

**URL** : `https://galaxy-media.2.us-1.fl0.io/api/media?search={query}`

**Auth required** : `False`

**Lang Support**: `True` 

## Schema

```json
{
  "page": number,
  "results": [
    {
      "id": number,
      "title": string,
      "adult": boolean,
      "genres": array,
      "overview": string,
      "poster": {
        light: string,
        original: string
      },
      "backdrop": {
        light: string,
        original: string
      },
      "year": string,
      "votes": number,
      "type": string,
      "url": string
    },
    ... max: 19 items more per page.
  ],
  "totalResults": number,
  "totalPages": number
}
```
<br />

## Response

**Code** : `200 OK` <br />
**Query**: `scarface`

```json
{
  "page": 1,
  "results": [
    {
      "id": 111,
      "title": "Scarface",
      "adult": false,
      "genres": [
        "Action",
        "Crime",
        "Drama"
      ],
      "overview": "After getting a green card in exchange for assassinating a Cuban government official, Tony Montana stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in the state, controlling nearly all the cocaine that comes through Miami. But increased pressure from the police, wars with Colombian drug cartels and his own drug-fueled paranoia serve to fuel the flames of his eventual downfall.",
      "poster": {
        "light": "https://image.tmdb.org/t/p/w500/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg",
        "original": "https://image.tmdb.org/t/p/original/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg"
      },
      "backdrop": {
        "light": "https://image.tmdb.org/t/p/w500/cCvp5Sni75agCtyJkNOMapORUQV.jpg",
        "original": "https://image.tmdb.org/t/p/original/cCvp5Sni75agCtyJkNOMapORUQV.jpg"
      },
      "year": "1983-12-09",
      "votes": 8.166,
      "type": "movie",
      "url": "https://galaxy-media.2.us-1.fl0.io/)/api/media/movie/111?lang=en-US"
    },
    ...
  ],
  "totalResults": 2,
  "totalPages": 27
}
```

