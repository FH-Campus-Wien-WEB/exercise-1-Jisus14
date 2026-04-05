const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  const movies = [
    {"Title":"The Super Mario Bros. Movie",
      "Released":"2023-04-05",
      "Runtime":92,
      "Genres":["Animation", "Adventure", "Comedy"],
      "Directors":["Aaron Horvath", "Michael Jelenic", "Pierre Leduc"],
      "Writers":["Matthew Fogel"],
      "Actors":["Chris Pratt", "Anya Taylor-Joy", "Charlie Day"],
      "Plot":"Brooklyn plumbers Mario and Luigi are warped to the magical Mushroom Kingdom, and Mario must team up with Princess Peach, Toad, and Donkey Kong to save Luigi from the evil Bowser.",
      "Poster":"https://m.media-amazon.com/images/M/MV5BOGZlN2EzOTYtMzUzOS00NTM3LTg0MTQtZDVjZGM4YmJlNWNhXkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore":46,
      "imdbRating":7.0
    },
    {
      "Title":"The Super Mario Galaxy Movie",
      "Released":"2026-04-01",
      "Runtime":98,
      "Genres":["Animation", "Adventure", "Comedy"],
      "Directors":["Aaron Horvath", "Michael Jelenic"],
      "Writers":["Matthew Fogel"],
      "Actors":["Chris Pratt", "Anya Taylor-Joy", "Benny Safdie"],
      "Plot":"Mario ventures into space, exploring cosmic worlds and tackling galactic challenges far from the familiar Mushroom Kingdom.",
      "Poster":"https://m.media-amazon.com/images/M/MV5BNDMyODQzZjAtNmYxYS00YjNiLWEzYTMtNzgyZWE5ODBkZDVhXkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore":null,
      "imdbRating":null
    },
    {
      "Title":"Super Mario Bros.",
      "Released":"1993-05-28",
      "Runtime":104,
      "Genres":["Adventure", "Comedy", "Family"],
      "Directors":["Annabel Jankel", "Rocky Morton"],
      "Writers":["Parker Bennett", "Terry Runte", "Ed Solomon"],
      "Actors":["Bob Hoskins", "John Leguizamo", "Dennis Hopper"],
      "Plot":"Can you make a movie out of a video game? That's the question that is answered by this film. Mario Mario and Luigi Mario, two hard working plumbers find themselves in an alternate universe where evolved dinosaurs live in medium hi-tech squalor. They find themselves the only hope to save the Earth from invasion.",
      "Poster":"https://m.media-amazon.com/images/M/MV5BYWUzYWIxMDUtYTdmYS00MjUxLWJjNDItYzcxOTY0N2M2YWE5XkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore":35,
      "imdbRating":4.2
    }
  ]

  res.json(movies)
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

