# Update Profile

**Method** : `PUT`

**URL** : `https://galaxy-media.2.us-1.fl0.io/api/auth/logout`

**Auth required** : `True`

**Lang Support**: `False`

**Body Parameters** :

> You can pass any parameter, all of them are optional. <br />
> [Here](./schema.md#UpdateSchema) is the Schema

```json
Content-Type: application/json

{
  "picture",
  "fullname",
  "gender",
  "username"
}

```

<br />

## Example of a Successfull Response

**Code** : `200 CREATED` <br />

```json
{
  "success": true,
  "message": "User updated",
  "updatedUser": {
    "id": "65281cec0c5fd2b3c63e1fa5",
    "username": "example123",
    "email": "example@gmail.com",
    "APIkey": "3012b783f342d39f5b00fcf0fe1b352f",
    "fullname": "example example",
    "gender": "male",
    "picture": "example",
    "createdAt": "2023-10-12T16:21:00.925Z",
    "updatedAt": "2023-10-18T20:21:58.316Z"
  }
}
```