# Add Rate / Update Rate

**Method** : `POST`

**URL** : `https://galaxy-media.2.us-1.fl0.io/api/rate/movie`

**Auth required** : `True`

**Lang Support**: `False` 

**Body Parameters** :

```json
Content-Type: application/json

{ "value": number }

```

<br />

## Example of a Successfull Response  

**Code** : `200 OK` <br />

```json
{
  "success": true,
  "message": "Success."
}
```

**Code** : `201 CREATED` <br />
```json
{
  "success": true,
  "message": "The item/record was updated successfully."
}
```