# Login

**Method** : `POST`

**URL** : `https://galaxy-media.2.us-1.fl0.io/api/auth/login`

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

**Schema** : [`LoginSchema`](./schema.md#LoginSchema) <br />
**Code** : `201 CREATED` <br />

```json
{
  "success": true,
  "message": "The user has been loged",
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

**Code** : 400

```json
{ 
  "success": false, 
  "message": "Invalid user" 
}
```

```json
{ 
  "success": false, 
  "message": "Invalid password" 
}
```
