"use strict";
const numberOfFilms = prompt("Сколько фильмов вы просмотрели?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genders: [],
  privat: false,
};
const a = prompt("Один из последний просмотренных фильмов?"),
  b = prompt("На сколько оцените его?"),
  c = prompt("Один из последний просмотренных фильмов?"),
  d = prompt("На сколько оцените его?");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
