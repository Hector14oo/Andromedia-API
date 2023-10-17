## Schemas

### TvShowDetailsSchema:
```json
{
  "adult": boolean,
  "id": number,
  "name": string,
  "gender": "Not set / not specified" | "Female" | "Male" | "Non-binary",
  "birthplace": string,
  "birthday": string,
  "deathday": string,
  "biography": string,
  "role": string,
  "images": [
    {
      "width": number,
      "height": number,
      "light": string,
      "original": string
    },
    ...
  ],
  "appearences": {
    "cast": [
      {
        "creditId": string,
        "character": string,
        ...MovieSchema
      },
      ...
    ],
    "crew": [
      {
        "creditId": string,
        "department": string,
        "job": string,
        ...MovieSchema
      },
      ...
    ]
  }
}
```
<br />

## MovieSchema

```json
  {
    "creditId": string,
    "id": number,
    "title": string,
    "adult": boolean,
    "genres": MovieGenreSchema[] | TvGenreSchema[],
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
    "type": TypeSchema,
    "url": string
  },
```

<br />

## TypeSchema

```json
  "movie" | "tv"
```

<br />

## MovieGenreSchema

```json
  "Action" | "Adventure" | "Animation" | "Comedy" | "Crime" | "Documentary" | "Drama" | "Family" | "Fantasy" | "History" | "Horror" | "Music" | "Mystery" | "Romance" | "Science Fiction" | "TV Movie" | "Thriller" | "War" | "Western"
```

<br />

## TvGenreSchema

```json
  "Action & Adventure" | "Animation" | "Comedy" | "Crime" | "Documentary" | "Drama" | "Family" | "Kids" | "Mystery" | "News" | "Reality" | "Sci-Fi & Fantasy" | "Soap" | "Talk" | "War & Politics" | "Western"
```

<br />