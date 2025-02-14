let books = [
        {
          "title": "The Great Gatsby",
          "genre": "Classic",
          "publish_year": 1925,
          "last_edition": 2021
        },
        {
          "title": "1984",
          "genre": "Dystopian",
          "publish_year": 1949,
          "last_edition": 2022
        },
        {
          "title": "To Kill a Mockingbird",
          "genre": "Fiction",
          "publish_year": 1960,
          "last_edition": 2020
        },
        {
          "title": "The Hobbit",
          "genre": "Fantasy",
          "publish_year": 1937,
          "last_edition": 2023
        },
        {
          "title": "Pride and Prejudice",
          "genre": "Romance",
          "publish_year": 1813,
          "last_edition": 2019
        },
        {
          "title": "The Catcher in the Rye",
          "genre": "Fiction",
          "publish_year": 1951,
          "last_edition": 2018
        },
        {
          "title": "Brave New World",
          "genre": "Dystopian",
          "publish_year": 1932,
          "last_edition": 2021
        },
        {
          "title": "Moby-Dick",
          "genre": "Adventure",
          "publish_year": 1851,
          "last_edition": 2017
        },
        {
          "title": "War and Peace",
          "genre": "Historical Fiction",
          "publish_year": 1869,
          "last_edition": 2022
        },
        {
          "title": "The Lord of the Rings",
          "genre": "Fantasy",
          "publish_year": 1954,
          "last_edition": 2023
        }
]

let userBooks = books.filter( (bk) => bk.genre === "Fantasy" )

userBooks = books.filter( (bk) => { return bk.publish_year >= 1950  && bk.genre === "Fiction"}) // Scope Opened if not using return keyword

console.log(userBooks);
