const express = require("express");
const mysql = require("mysql");

//Create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql",
});

//Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to MySQL");
});

const app = express();

//Create DB
app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE nodemysql";
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send("Database created...");
  });
});

//create table
app.get("/createpoststable", (req, res) => {
  let sql =
    "CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err) => {
    if (err) throw err;
    res.send("Posts table created...");
  });
});

//Insert post 1
app.get("/addpost1", (req, res) => {
  let post = { title: "Post One", body: "This is post number one" };
  let sql = "INSERT INTO posts SET ?";
  db.query(sql, post, (err) => {
    if (err) throw err;
    res.send("Post 1 added...");
  });
});

//Select posts
app.get("/getposts", (req, res) => {
  let sql = "SELECT * FROM posts";
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Posts fetched...");
  });
});

// Update post
app.get("/updatepost/:id", (req, res) => {
  let newTitle = "Updated Title";
  let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
  db.query(sql, (err) => {
    if (err) throw err;
    res.send("Post updated...");
  });
});

// Delete post
app.get("/deletepost/:id", (req, res) => {
  let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
  db.query(sql, (err) => {
    if (err) throw err;
    res.send("Post deleted...");
  });
});

app.listen("3001", () => {
  console.log("Server started on port 3001");
});
