## RateListSchema

```json
{
  "page": number,
  "results": [
    Movie&TvSchema,
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