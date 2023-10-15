
# Media REST-API

Explore detailed information about movies, television programs, and notable personalities. Stay updated on entertainment trends. Session management enables users to rate movies and series, as well as add them to their favorites list, providing a personalized entertainment experience

### Some endpoints accept 'lang' as a query parameter. 
[Here](docs/language/readme.md) is the list of available languages.

<br />

## Open Endpoints
These endpoints are available to all users, no token is required to access them.

### Media Data 🎥

Each endpoint provides information related to the media type being searched for.
* **`/api/media`** > [Show Details.](docs/media/readme.md)

### Authentication 🔑

These endpoints are for user authentication (registration, login, and logout).
* **`/api/auth`** > [Show Details.](docs/auth/readme.md)
<br />

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Authentication EndPoints (Register / Login).

### Profile Data🤓

Endpoints to retrieve, modify, and delete a profile.

* **`/api/profile`** > [Show Details.](docs/profile/readme.md)

### Favorites List 💖

Endpoints to Get, Add, and Delete favorites from your list.
* **`/api/favorites`** > [Show Details.](docs/favorites/readme.md)

### Rate Media 📈

CRUD endpoints for your list of rated movies and series (Create, Read, Update, Delete).
* **`/api/rate`** > [Show Details.](docs/rate/readme.md)
