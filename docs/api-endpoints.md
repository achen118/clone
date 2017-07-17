# API Endpoints #

## HTML API ##


## JSON API ##

### Users ###
* Create new user: ```POST /api/users```
* Update user info: ```PATCH /api/users```

### Session ###
* Log in user: ```POST /api/session```
* Log out user: ```DELETE /api/session```

### Notes ###
* Fetch all notes for index/search: ```GET /api/notes```
  * accepts tag_name query param to list notes by tag
* Add new note: ```POST /api/notes/```
* Fetch note by ID: ```GET /api/notes/:note_id```
* Update note by ID: ```PATCH /api/notes/:note_id```
* Delete note by ID: ```DELETE /api/notes/:note_id```

### Notebooks ###
* Fetch all notebooks: ```GET /api/notebooks```
* Add new notebook: ```POST /api/notebooks/```
* Fetch notebook by ID: ```GET /api/notebooks/:notebook_id```
* Update notebook by ID: ```PATCH /api/notebooks/:notebook_id```
* Delete notebook by ID: ```DELETE /api/notebooks/:notebook_id```
* Fetch notes from notebook by ID: ```GET /api/notebooks/:notebook_id/notes```

### Tags ###
* Fetch all tags: ```GET /api/tags```
* Add new tag to a note: ```POST /api/notes/:note_id/tags```
* Delete tag from note by tag name: ```DELETE /api/notes/:note_id/tags/:tag_name```
