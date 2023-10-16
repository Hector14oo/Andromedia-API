<h1>Endpoints</h1>
<p>
  We have two types of endpoints: those that require authentication and those that do not. <br />
  <h3>Some endpointsaccept "lang" as a query parameter <a href="docs/language/readme.md">Here</a> is the list of languages. </h3>
</p>

<br />

<h2>Open Endpoints</h2>
These endpoints are available to all users, no token is required to access them.

### Media Data 🎥

Each endpoint provides information related to the media type being searched for.
* **`/api/media`** > [Show Details.](./media/readme.md)

### Authentication 🔑

These endpoints are for user authentication (registration, login, and logout).
* **`/api/auth`** > [Show Details.](./auth/readme.md)
<br />

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Authentication EndPoints (Register / Login).

### Profile Data🤓

Endpoints to retrieve, modify, and delete a profile.

* **`/api/profile`** > [Show Details.](./profile/readme.md)

### Favorites List 💖

Endpoints to Get, Add, and Delete favorites from your list.
* **`/api/favorites`** > [Show Details.](./favorites/readme.md)

### Rate Media 📈

CRUD endpoints for your list of rated movies and series (Create, Read, Update, Delete).
* **`/api/rate`** > [Show Details.](./rate/readme.md)
