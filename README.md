## Node js Starter

Go to the project directory and then follow the below given steps:

1. npm --version : for version check
2. npm init : for initialisation then press enter through the prompts to get a default initialisation
3. npm install express : for installing express js framework for node.

### Using the JWT

1. Run the command `node index.js`
2. Execute the post url on **Postman** `localhost:3000/api/login` to get the auth token
3. Copy the auth token
4. Execute the url `localhost:3000/api/posts/` by adding **Headers**
5. _Key_ as `Authorization` and _Value_ as `Bearer<space><copied auth token>`
6. Once you run this you will get the encriped info in the jwt token
