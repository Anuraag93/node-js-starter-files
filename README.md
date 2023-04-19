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

### Backend project creation and structure

1. Use `npm init -y` to initalise the backend project
2. Install the required packages using this command `npm i express mongoose nodemon dotenv express-async-handler`.
3. Under `package.json` add `"dev": "nodemon server.js"` to _"scripts_
4. Use `npm run dev` command to run nodemon which automatically refreshes the server every time a file is saved.

### Frontend Project creation and structure

1. `npm create vite@latest .` setup up the project framework then select `React` and `javascript` in the options.
2. Now install the necessary modules `npm i axios react-router-dom` 
3. Go to the backend folder to start the server using `npm run dev`.
4. Include the **bootstrap** *link* and *script* links from the website in the `index.html` file to use bootstrap navigation bar.
5. Now run `npm run dev` on the frontend folder to see your changes on the browser.

### Interaction between frontend and backend code pointers

If you are getting axios Network error while using post then add `app.use(cors());` in the server side code and it will work as expected


<img width=500 src="https://user-images.githubusercontent.com/21260609/232944392-5c3936a2-8431-4ebd-bea8-5506bc1f9481.png"/> <img width=500 src="https://user-images.githubusercontent.com/21260609/232944402-ece1de7c-afbe-4f7d-9574-70a6b0b36284.png"/> <img width=500 src="https://user-images.githubusercontent.com/21260609/232944398-63f04ee8-616d-4750-8810-162dd8fb916b.png"/>
