## SearchSchema

```json
{
  "page": number,
  "results": [
    Movie&TvSchema | PersonSchema
    ... max: 19 items more per page.
  ],
  "totalResults": number,
  "totalPages": number
}
```

<br />

## Movie&TvSchema 

```json
  {
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

## PersonSchema 

```json
  {
    "adult": boolean,
    "id": number,
    "name": string,
    "image": {
      "light": string,
      "original": string
    },
    "type": "person",
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
