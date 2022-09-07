# How to build

There is two parts of the program.
- Server - the main one.
- Client - just to show that the api is working.

- Run server side: docker run --name movie-libary -p 5000:5000 -e PORT=5000 mex4nik/movie-library:server
- Run client side: docker run --name movie-library-client -p 3000:3000 mex4nik/movie-library:client

One note: To use client side, make sure the server side is working on port = 5000.

# What APIs are implemented
- User:
(POST) http://localhost:5000/user - create new user
{
    "email": "123",
    "username": "456",
    "password": "678",
    "confirmPassword": "678"
}

- Login: 
(POST) http://localhost:5000/login - authorization. Generates jwt token for other requests. (Need to put user credentials in body of the request)
{
    "username": "456",
    "password": "678"
}
After tocken was generated, you can use it with other requests, using Type: Bearer Token

- Movie: 
- (POST) http://localhost:5000/movie - create new movie **(use token from the authorization request)**
body: {
    "title": "Great movie 1",
    "releaseDate": "2020",
    "format": "VHS",
    "stars": "Name1 lastName1, Name2 last2"
}

-  (GET) http://localhost:5000/movie/{id} - get one movie by id **(use token from the authorization request)**
-  (GET) http://localhost:5000/movie - get all movies **(use token from the authorization request)**
   List of available queries: 
   - title=string - get movie by title
   - star=string - get movie by actor first name
   - sort=true - get all movies sorted in alphabetical order
   
-  (DELETE) http://localhost:5000/movie/{id} - delete one movie by id **(use token from the authorization request)**

# How to import data from txt?
- Run with server and client sides.
- Open this url -> http://localhost:3000/movies
- On top you will see a file input. Click on it and chose txt with movies
- The page will refresh and you will see your data
