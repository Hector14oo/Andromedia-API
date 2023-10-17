## Schemas

### tvSeasonDetailsSchema
```json
{
   "id": number,
  "title": string,
  "number": number,
  "date": string,
  "overview": string,
  "episodes": [
    {
      "id": number,
      "title": string,
      "number": number,
      "date": string,
      "overview": string,
      "duration": string,
      "preview": {
        "light": string,
        "original": string
      },
      "votes": number
    },
    ...
  ],
  "poster": {
  "light": string,
  "original": string
  },
  "votes": number
}
```