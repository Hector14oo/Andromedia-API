# Register

**Method** : `POST`

**URL** : `https://galaxy-media.2.us-1.fl0.io/api/auth/register`

**Auth required** : `False`

**Lang Support**: `False` 

**Body Parameters** :
```json
Content-Type: application/json

{
  "email",
  "password"
} 
```

<br />

## Example of a Successfull Response

**Schema** : [`RegisterSchema`](./schema.md#RegisterSchema) <br />
**Code** : `201 CREATED` <br />

```json
{
  "success": true,
  "message": "The user has been registered",
  "user": {
    "id": "652f089c5dfe71dc00e2f7a4",
    "username": null,
    "email": "example@gmail.com",
    "APIkey": null,
    "fullname": null,
    "gender": null,
    "picture": null
  }
}
```

<br />

## Example of a Failed Response 

**Code** : `409 CONFLICT`

```json
{
  "success": false,
  "message": "The user is already registered"
}
```
