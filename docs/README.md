
<h1 align="center" >Endpoints</h1>
<p align="center" >
  We have two types of endpoints: those that require authentication and those that do not. <br />
</p>
<h3 align="center" >Some endpoints accept "lang" as a query parameter <a href="./language/readme.md">Here</a> is the list of languages. </h3>

<br />

<p align="center" > <img src="https://i.imgur.com/HnxjZDU.png" width="100%" height="150px" /> </p>

<br />

<h2>Open Endpoints</h2>
These endpoints are available to all users, no token is required to access them.

### Media Data 🎥

Each endpoint provides information related to the media type being searched for.
* **`/api/media`** > [Show Details.](./media/README.md)

### Authentication 🔑

These endpoints are for user authentication (registration, login, and logout).
* **`/api/auth`** > [Show Details.](./auth/README.md)
<br />

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Authentication EndPoints (Register / Login).

### Profile Data🤓

Endpoints to retrieve, modify, and delete a profile.

* **`/api/profile`** > [Show Details.](./profile/README.md)

### Favorites List 💖

Endpoints to Get, Add, and Delete favorites from your list.
* **`/api/favorites`** > [Show Details.](./favorites/README.md)

### Rate Media 📈

CRUD endpoints for your list of rated movies and series (Create, Read, Update, Delete).
* **`/api/rate`** > [Show Details.](./rate/README.md)
