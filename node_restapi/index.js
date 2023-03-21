const express = require("express");

const app = express();
const port = 3000;

//parse JSON using express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    director: "chistopher Nolan",
    release_date: "1994-09-23",
  },
  {
    id: 2,
    title: "The Godfather",
    director: "chistopher Nolan",
    release_date: "1994-09-23",
  },
  {
    id: 3,
    title: "The Godfather: Part II",
    director: "Martin Scorsese",
    release_date: "1994-09-27",
  },
  {
    id: 4,
    title: "The Dark Knight",
    director: "Martin Scorsese",
    release_date: "1994-09-27",
  },
];

//get the movie list in form of json
app.get("/movies", (req, res) => {
  res.json(movies);
});

//add a new movie
app.post("/movies", (req, res) => {
  const movie = {
    id: movies.length + 1,
    title: req.body.title,
    director: req.body.director,
    release_date: req.body.release_date,
  };
  movies.push(movie);
  res.json(movies);
});

//search for movue in the list
app.get("/movies/:id", (req, res) => {
  const movie = movies.find((m) => m.id === parseInt(req.params.id));
  if (!movie)
    res.status(404).send("The movie with the given ID was not found.");
  res.send(movie);
});

//remove movie from the list
app.delete("/movies/:id", (req, res) => {
  const movie = movies.find((m) => m.id === parseInt(req.params.id));
  if (!movie)
    res.status(404).send("The movie with the given ID was not found.");
  const index = movies.indexOf(movie);
  movies.splice(index, 1);
  res.send({ movie, message: "deleted successfully" });
});

//set the server to listen on port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
