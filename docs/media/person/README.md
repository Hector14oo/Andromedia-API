# Person Details

**Method** : `GET`

**URL** : `https://galaxy-media.2.us-1.fl0.io/api/media/person/{personId}`

**Auth required** : `False`

**Lang Support**: `True` 

**Parameters** : 
* `personId`: You need to provide a valid ID belonging to a person in order to receive its details.

<br />

## Example of a Successful Response

**Schema** : [`PersonDetailsSchema`](./schema.md)
**Code** : `200 OK` <br />
**Parameters** : 
* `personId` = 91606

```json

{
  "adult": false,
  "id": 91606,
  "name": "Tom Hiddleston",
  "gender": "Male",
  "birthplace": "Westminster, London, England, UK",
  "birthday": "1981-02-09",
  "deathday": null,
  "biography": "Thomas William Hiddleston (born 9 February 1981) is an English actor. He gained international fame portraying Loki in the Marvel Cinematic Universe (MCU), starting with Thor in 2011 and most recently in the Disney+ series Loki in 2021. He started his film career in the Joanna Hogg films Unrelated (2007) and Archipelago (2010). In 2011, Hiddleston portrayed F. Scott Fitzgerald in Woody Allen's romantic comedy Midnight in Paris, and appeared in Steven Spielberg's War Horse. ​That year, he won the Empire Award for Best Male Newcomer and was nominated for the BAFTA Rising Star Award. He continued working with auteurs in independent films including Terence Davies' The Deep Blue Sea (2012), Jim Jarmusch's romantic vampire film Only Lovers Left Alive (2013) and Guillermo del Toro's Crimson Peak (2015). He also starred in Ben Wheatley's action film High Rise, and played the troubled country music singer Hank Williams in the biopic I Saw The Light. The film Kong: Skull Island (2017) marked his first big-budget leading role outside the MCU. Hiddleston made his stage debut in Journey's End in 1999. He continued acting in theatre including the West End productions of Cymbeline (2007) and Ivanov (2008). He won the Olivier Award for Best Newcomer in a Play for his role in Cymbeline and was also nominated for the same award for his role as Cassio in Othello (2008). Hiddleston starred as the title character in a production of Coriolanus (2013–14), winning the Evening Standard Theatre Award for Best Actor and receiving a nomination for the Olivier Award for Best Actor. He made his Broadway debut in a 2019 revival of Harold Pinter's classic drama Betrayal, for which he was nominated for the Tony Award for Best Actor in a Play. Hiddleston's also known for his performances in television including his part in the 2012 BBC series The Hollow Crowns Henry IV and Henry V. Hiddleston starred in and executive-produced the AMC / BBC limited series The Night Manager (2016), for which he received two Primetime Emmy Award nominations, and won his first Golden Globe Award for Best Actor – Miniseries or Television Film.",
  "role": "Acting",
  "images": [
    {
      "width": 1885,
      "height": 2828,
      "light": "https://image.tmdb.org/t/p/w500/mclHxMm8aPlCPKptP67257F5GPo.jpg",
      "original": "https://image.tmdb.org/t/p/original/mclHxMm8aPlCPKptP67257F5GPo.jpg"
    },
    ...
  ],
  "appearences": {
    "cast": [
      {
        "creditId": "52fe46e2c3a368484e0a935b",
        "character": "Edward",
        "id": 64655,
        "title": "Archipelago",
        "adult": false,
        "genres": [
          "Drama"
        ],
        "overview": "Deep fractures within a family dynamic begin to surface during a getaway to the Isles of Scilly.",
        "poster": {
          "light": "https://image.tmdb.org/t/p/w500/gTFePCw4BDx1ikvgdaX0fDf9ewF.jpg",
          "original": "https://image.tmdb.org/t/p/original/gTFePCw4BDx1ikvgdaX0fDf9ewF.jpg"
        },
        "backdrop": {
          "light": "https://image.tmdb.org/t/p/w500/aLGd3Af9srD318V73GwHnqL1J6v.jpg",
          "original": "https://image.tmdb.org/t/p/original/aLGd3Af9srD318V73GwHnqL1J6v.jpg"
        },
        "year": "2011-03-04",
        "votes": 5.579,
        "type": "movie",
        "url": "https://mudgee-dingo-sjdk.2.us-1.fl0.io/api/media/movie/64655?lang=en-US"
      },
      ...
    ],
    "crew": [
      {
        "creditId": "5f4f3174c8a2d40032adc28b",
        "department": "Crew",
        "job": "Thanks",
        "id": 375997,
        "title": "Babysitting",
        "adult": false,
        "genres": [
          "Comedy"
        ],
        "overview": "When Maggie is asked to babysit for her boss' wife, an unfortunate incident alters her outlook on love, life and an old relationship. A wonderfully engaging short film that examines the transformative nature of human relationships.",
        "poster": null,
        "backdrop": null,
        "year": "2011-09-05",
        "votes": 6.5,
        "type": "movie",
        "url": "https://mudgee-dingo-sjdk.2.us-1.fl0.io/api/media/movie/375997?lang=en-US"
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