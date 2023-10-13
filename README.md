
# Media REST-API

Explore detailed information about movies, television programs, and notable personalities. Stay updated on entertainment trends. Session management enables users to rate movies and series, as well as add them to their favorites list, providing a personalized entertainment experience.

<br />

> ## Some endpoints accept "lang" as a query parameter, [Here](docs/language/readme.js) is the list of available languages.
> ### Example: `/api/media/trending?lang='en-US'`


## Open Endpoints
These endpoints are available to all users; no token is required to access them.


* ### Media Data 🎥

  Each endpoint provides information related to the media type being searched for.
  <br /> • **`/api/media`** > [Show Details.](docs/media/readme.md)


* ### Authentication 🔑

  These endpoints are for user authentication (registration, login, and logout).
  <br /> • **`/api/auth/register`** > [Show Details.](docs/auth/readme.md) <br /><br />


## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Authentication EndPoints (Register / Login).


* ### Profile Data🤓

  Endpoints to retrieve, modify, and delete a profile.
  <br /> • **`/api/profile`** > [Show Details.](docs/profile/readme.md)


* ### Favorites List 💖

  Endpoints to Get, Add, and Delete favorites from your list.
  <br /> • **`/api/favorites`** > [Show Details.](docs/favorites/readme.md)


* ### Rate Media 📈

  CRUD endpoints for your list of rated movies and series (Create, Read, Update, Delete).
  <br /> • **`/api/rate`** > [Show Details.](docs/rate/readme.md)
