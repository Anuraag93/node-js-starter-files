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

### Using MySQL

1. Install XAMPP and run the Apache and MySQL servers
2. Go to the application and click `phpMyAdmin` on the `localhost/dashboard`
3. Click on the _nodemysql_ (name of my database) to see and explore the CRUD changes to the database.
   C - Create
   R - Read
   U - Update
   D - Delete

### Connecting to Mongodb

1. Take the free community version mongo db subscription.
2. In mongodb website create a project -> create a shared cluster.
3. Create a user to enable the database access -> copy the password because it will be usefull later on for you node js code.
4. After your cluster is created click on connect for the particular cluster to connect to your application or vscode.
5. To connect to your application select the driver and version (Node.js and 4.1 or later) and then copy the connection string and replace the <password> with the above copied password.
6. This connection string can be used as a URI in .env to connect to your mongodb database.

### backend project creation and structure

1. Use `npm init -y` to initalise the backend project
2. Install the required packages using this command `npm i express mongoose nodemon dotenv express-async-handler`.
3. Under `package.json` add `"dev": "nodemon server.js"` to _"scripts_
4. Use `npm run dev` command to run nodemon which automatically refreshes the server every time a file is saved.
