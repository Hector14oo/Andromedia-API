# Get Rate List

**Method** : `GET`

**URL** : `https://galaxy-media.2.us-1.fl0.io/api/rate/list`

**Auth required** : `True`

**Lang Support**: `False` 

<br />

## Example of a Successfull Response

**Schemas** : [RateLisSchema](./schema.md) <br />
**Code** : `200 OK` <br />
> If you don't have any rated media, results will be and empty array <br />

```json
{
  "movies": {
    "page": 1,
    "results": [],
    "totalPages": 0,
    "totalResults": 0
  },
  "tvShows": {
    "page": 1,
    "results": [],
    "totalPages": 1,
    "totalResults": 1
  }
}
```

```json
{
  "movies": {
    "page": 1,
    "results": [],
    "totalPages": 0,
    "totalResults": 0
  },
  "tvShows": {
    "page": 1,
    "results": [
      {
        "id": 206559,
        "title": "Binnelanders",
        "adult": false,
        "genres": [
          "Soap"
        ],
        "overview": "",
        "poster": {
          "light": "https://image.tmdb.org/t/p/w500/v9nGSRx5lFz6KEgfmgHJMSgaARC.jpg",
          "original": "https://image.tmdb.org/t/p/original/v9nGSRx5lFz6KEgfmgHJMSgaARC.jpg"
        },
        "backdrop": {
          "light": "https://image.tmdb.org/t/p/w500/1stoC4UstDtmST8x8VATtf08KfL.jpg",
          "original": "https://image.tmdb.org/t/p/original/1stoC4UstDtmST8x8VATtf08KfL.jpg"
        },
        "year": "2005-10-13",
        "votes": 4.781,
        "url": "http://localhost:1234/api/media/tv/206559?lang=es-MX",
        "yourRate": 4
      }
    ],
    "totalPages": 1,
    "totalResults": 1
  }
}
```
